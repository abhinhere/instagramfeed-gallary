
import { useState, useEffect } from "react";
import { InstagramPost as InstagramPostType, fetchInstagramPosts } from "@/utils/instagramApi";
import InstagramPost from "./InstagramPost";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const fetchedPosts = await fetchInstagramPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch Instagram posts:", error);
        toast({
          title: "Error loading posts",
          description: "Could not load Instagram posts. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, [toast]);

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="masonry-grid animate-pulse">
          {Array.from({ length: 9 }).map((_, index) => (
            <Skeleton 
              key={index} 
              className={`masonry-grid-item bg-gray-200 ${
                index % 5 === 0 
                  ? "h-[400px]" 
                  : index % 3 === 0 
                  ? "h-[300px]"
                  : "h-[250px]"
              }`}
            />
          ))}
        </div>
      ) : (
        <div className="masonry-grid">
          {posts.map((post) => (
            <InstagramPost 
              key={post.id} 
              post={post} 
              className="animate-fade-in"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;
