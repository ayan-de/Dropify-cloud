
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
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
            <p className="mt-3 text-gray-500">
              Secure cloud storage to store, share, and collaborate on your files from anywhere.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-500 hover:text-brand-purple">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-500 hover:text-brand-purple">Pricing</Link></li>
              <li><Link to="/helpdesk" className="text-gray-500 hover:text-brand-purple">Help Desk</Link></li>
              <li><Link to="/security" className="text-gray-500 hover:text-brand-purple">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-500 hover:text-brand-purple">Help Center</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-brand-purple">Blog</Link></li>
              <li><Link to="/developers" className="text-gray-500 hover:text-brand-purple">Developers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-brand-purple">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-500 hover:text-brand-purple">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-brand-purple">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Dropify. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-brand-purple">Terms</Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-brand-purple">Privacy</Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-brand-purple">Cookies</Link>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-3 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">Other Pages</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/login" className="text-gray-500 text-sm hover:text-brand-purple">Login</Link>
            <Link to="/signup" className="text-gray-500 text-sm hover:text-brand-purple">Signup</Link>
            <Link to="/not-found" className="text-gray-500 text-sm hover:text-brand-purple">Not Found</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
