
import { InstagramPost as InstagramPostType, formatDate } from "@/utils/instagramApi";
import { cn } from "@/lib/utils";
import { Heart, MessageCircle } from "lucide-react";

interface InstagramPostProps {
  post: InstagramPostType;
  className?: string;
}

const InstagramPost = ({ post, className }: InstagramPostProps) => {
  const { mediaUrl, caption, timestamp, likes, comments } = post;
  
  return (
    <div className={cn("masonry-grid-item group", className)}>
      <img 
        src={mediaUrl} 
        alt={caption}
        className="transition-all duration-500 ease-in-out"
      />
      <div className="masonry-grid-item-overlay">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm opacity-80">{formatDate(timestamp)}</span>
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <Heart className="w-4 h-4 mr-1" /> {likes}
            </span>
            <span className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" /> {comments}
            </span>
          </div>
        </div>
        <p className="text-sm line-clamp-2">{caption}</p>
      </div>
    </div>
  );
};

export default InstagramPost;
