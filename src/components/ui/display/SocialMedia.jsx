import { Facebook, Instagram, Twitter } from "lucide-react";

export const SocialMedia = () => {
  return (
    <div className="flex flex-row sm:flex-col items-right justify-end gap-4">
      <div className="flex items-center items-right justify-end px-6 py-2">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="backdrop-blur supports-backdrop-filter:bg-foreground hover:bg-primary text-card  shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full p-4"
        >
          <Facebook className="w-6 h-6" />
        </a>
      </div>
      <div className="flex items-center items-right justify-end px-6 py-2">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="backdrop-blur supports-backdrop-filter:bg-foreground hover:bg-primary text-card shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full p-4"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
      <div className="flex items-center items-right justify-end px-6 py-2">
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="backdrop-blur supports-backdrop-filter:bg-foreground hover:bg-primary text-card shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full p-4"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
