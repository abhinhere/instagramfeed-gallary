
import InstagramFeed from "@/components/InstagramFeed";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-instagram-purple to-instagram-pink py-20 px-6 md:px-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="w-8 h-8 text-gray-800 mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">InstaGallery</h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Beautiful moments captured and shared. My Instagram journey in one stunning gallery.
            </p>
          </div>
          <div className="text-center">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 font-medium" 
              size="lg"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow on Instagram
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ 
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" 
        }}></div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16 max-w-6xl -mt-6 relative z-10">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Latest Posts</h2>
          <p className="text-gray-600">Explore my Instagram feed gallery</p>
        </div>
        
        <InstagramFeed />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} InstaGallery. Built with React & Tailwind CSS.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
