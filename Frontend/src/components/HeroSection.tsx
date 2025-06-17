
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl">
                Store, share, and collaborate with ease
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Securely store all your files in one place. Access them anytime, anywhere, and share with anyone.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/signup">
                <Button className="bg-brand-purple hover:bg-brand-purple-dark">Get Started</Button>
              </Link>
              <Link to="/files">
                <Button variant="outline">Explore Features</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-light to-white opacity-70 rounded-xl"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-6">
                  <div className="bg-white p-4 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <div className="w-10 h-10 bg-brand-purple-light rounded-md mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <div className="w-10 h-10 bg-green-100 rounded-md mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    <div className="w-10 h-10 bg-blue-100 rounded-md mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
                    <div className="w-10 h-10 bg-yellow-100 rounded-md mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
