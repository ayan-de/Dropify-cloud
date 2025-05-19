
import { Button } from "@/components/ui/button";
import FileExplorer from "@/components/file-explorer/FileExplorer";
import { ChevronDown, Cloud, Settings, User, Trash2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider } from "@/components/ui/sidebar";

const Files = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <aside className="w-64 border-r hidden md:block">
          <div className="h-full flex flex-col p-4">
            <Button variant="outline" className="justify-between mb-6">
              <span>My Dropify</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            
            <nav className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <Cloud className="mr-2 h-4 w-4" />
                <span>All Files</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                <span>Shared</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Trash</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Button>
            </nav>
          
          </div>
        </aside>
        <main className="flex-1 flex flex-col">
          <FileExplorer />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Files;
