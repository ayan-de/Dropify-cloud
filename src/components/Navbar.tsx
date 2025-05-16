
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 border-b border-gray-100">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-brand-purple rounded-md flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5 text-white" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M2 15h10" />
                <path d="m9 18 3-3-3-3" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">Dropify</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/files">
            <Button variant="ghost">Files</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark">Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
