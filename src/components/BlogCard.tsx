import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden bg-background border-border hover:border-primary/30 transition-colors group h-full flex flex-col">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/10] bg-secondary/80 relative overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <BookOpen className="h-12 w-12 text-white/20" />
          </div>
          <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-heading text-base font-bold text-foreground leading-snug mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] font-semibold">{post.author.initials}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{post.author.name}</span>
              <span className="mx-1.5">·</span>
              <span>{post.date}</span>
            </div>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all shrink-0"
          >
            Ler <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
