
// This is a mock Instagram API implementation
// In a real application, you would use the actual Instagram API with your access token
// For this demo, we're using placeholder data

export interface InstagramPost {
  id: string;
  mediaUrl: string;
  caption: string;
  permalink: string;
  timestamp: string;
  likes: number;
  comments: number;
  width: number;
  height: number;
}

// Mock Instagram data with different image dimensions for the masonry layout
const mockInstagramData: InstagramPost[] = [
  {
    id: '1',
    mediaUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    caption: 'Coding session. #webdevelopment #coding',
    permalink: 'https://instagram.com',
    timestamp: '2025-05-10T12:00:00',
    likes: 142,
    comments: 23,
    width: 1200,
    height: 800
  },
  {
    id: '2',
    mediaUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    caption: 'Working from home. #remotework #productivity',
    permalink: 'https://instagram.com',
    timestamp: '2025-05-09T15:30:00',
    likes: 98,
    comments: 12,
    width: 800,
    height: 1200
  },
  {
    id: '3',
    mediaUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    caption: 'Beautiful landscapes. #nature #photography',
    permalink: 'https://instagram.com',
    timestamp: '2025-05-08T09:15:00',
    likes: 256,
    comments: 42,
    width: 1200,
    height: 600
  },
  {
    id: '4',
    mediaUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    caption: 'My cute cat. #catsofinstagram #pets',
    permalink: 'https://instagram.com',
    timestamp: '2025-05-07T18:45:00',
    likes: 312,
    comments: 56,
    width: 800,
    height: 800
  },
  {
    id: '5',
    mediaUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    caption: 'Evening lights. #evening #lights #ambience',
    permalink: 'https://instagram.com',
    timestamp: '2025-05-06T20:20:00',
    likes: 178,
    comments: 31,
    width: 1200,
    height: 1200
  },
  {
    id: '6',
    mediaUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    caption: 'Weekend vibes. #weekend #relaxation',
    permalink: 'https://instagram.com',
    timestamp: '2025-05-05T11:10:00',
    likes: 201,
    comments: 19,
    width: 800,
    height: 600
  },
  {
    id: '7',
    mediaUrl: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    caption: 'Coffee break. #coffee #productivity',
    permalink: 'https://instagram.com',
    timestamp: '2025-05-04T14:25:00',
    likes: 165,
    comments: 28,
    width: 600,
    height: 900
  },
  {
    id: '8',
    mediaUrl: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d',
    caption: 'Summer memories. #summer #beach',
    permalink: 'https://instagram.com',
    timestamp: '2025-05-03T16:50:00',
    likes: 287,
    comments: 45,
    width: 900,
    height: 600
  },
  {
    id: '9',
    mediaUrl: 'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b',
    caption: 'City lights. #city #night #urban',
    permalink: 'https://instagram.com',
    timestamp: '2025-05-02T21:15:00',
    likes: 223,
    comments: 37,
    width: 1200,
    height: 900
  }
];

export const fetchInstagramPosts = async (): Promise<InstagramPost[]> => {
  // In a real application, you would make an API call to Instagram here
  // For example:
  // const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
  // const data = await response.json();
  // return data.data;

  // For this demo, we'll just return our mock data after a small delay to simulate a network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockInstagramData);
    }, 800);
  });
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
