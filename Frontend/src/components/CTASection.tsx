
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="bg-brand-purple rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Ready to start storing your files?
              </h2>
              <p className="text-brand-purple-light text-lg">
                Join thousands of users who trust Dropify with their important files. 
                Get started with 5GB of free storage today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/signup">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100">
                    Create Free Account
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" className="text-brand-purple border-white ">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto hidden lg:block">
              <div className="absolute right-0 top-0 h-full w-[80%] bg-white/20 rounded-lg"></div>
              <div className="absolute right-12 top-12 h-[70%] w-[60%] bg-white/30 rounded-lg"></div>
              <div className="absolute right-24 top-24 h-[40%] w-[40%] bg-white/40 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
