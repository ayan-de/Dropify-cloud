
import { File, Upload, Download, Share2 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <File className="h-10 w-10 text-brand-purple" />,
      title: "File Management",
      description: "Organize your files into folders and access them easily from anywhere."
    },
    {
      icon: <Upload className="h-10 w-10 text-brand-purple" />,
      title: "Easy Uploads",
      description: "Drag and drop files or use the upload button to store your content securely."
    },
    {
      icon: <Download className="h-10 w-10 text-brand-purple" />,
      title: "Quick Downloads",
      description: "Download any file with a single click whenever you need it."
    },
    {
      icon: <Share2 className="h-10 w-10 text-brand-purple" />,
      title: "Secure Sharing",
      description: "Share files with anyone using secure links with optional expiration dates."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need to manage your files</h2>
          <p className="mt-4 text-lg text-gray-500">
            Powerful features designed to make file management simple and secure
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
