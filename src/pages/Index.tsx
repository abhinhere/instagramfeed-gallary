
import InstagramFeed from "@/components/InstagramFeed";
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
              Gallary
            </p>
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
          <p className="text-gray-600">Instagram feed gallery</p>
        </div>
        
        <InstagramFeed />
      </main>
    </div>
  );
};

export default Index;
