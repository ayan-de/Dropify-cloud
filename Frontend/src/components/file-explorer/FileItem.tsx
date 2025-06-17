
import { useState } from "react";
import { File, Folder, MoreVertical, Download, Trash } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type FileItemProps = {
  name: string;
  type: "file" | "folder";
  size?: string;
  modified?: string;
  onClick?: () => void;
  onDownload?: () => void;
  onDelete?: () => void;
};

const FileItem = ({ 
  name, 
  type, 
  size, 
  modified, 
  onClick,
  onDownload,
  onDelete
}: FileItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDownload?.();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "flex items-center p-3 rounded-md cursor-pointer border",
        isHovered ? "bg-gray-50 border-gray-200" : "border-transparent"
      )}
    >
      <div className="mr-3">
        {type === "folder" ? (
          <Folder className="h-6 w-6 text-brand-purple" />
        ) : (
          <File className="h-6 w-6 text-gray-400" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
        <p className="text-xs text-gray-500">
          {size && <span className="mr-2">{size}</span>}
          {modified && <span>Modified {modified}</span>}
        </p>
      </div>
      <div className={cn("flex items-center", isHovered ? "opacity-100" : "opacity-0")}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-md hover:bg-gray-200">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {type === "file" && (
              <DropdownMenuItem onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                <span>Download</span>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={handleDelete} className="text-red-500">
              <Trash className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FileItem;
