import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen } from "lucide-react";
import { blogPosts, categories } from "@/data/blogPosts";

interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

const BlogSidebar = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  activeTag,
  onTagChange,
}: BlogSidebarProps) => {
  // Count posts per category
  const categoryCounts = categories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = blogPosts.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  // Build tag frequency map
  const tagFrequency: Record<string, number> = {};
  blogPosts.forEach((p) =>
    p.tags.forEach((t) => {
      tagFrequency[t] = (tagFrequency[t] || 0) + 1;
    })
  );
  const allTags = Object.entries(tagFrequency).sort((a, b) => b[1] - a[1]);

  // Recent posts (latest 4)
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
          Buscar
        </h4>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar posts..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
          Categorias
        </h4>
        <div className="space-y-1">
          <button
            onClick={() => onCategoryChange(null)}
            className={`w-full flex items-center justify-between text-sm py-2 px-3 rounded-md transition-colors ${
              activeCategory === null
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <span>Todos</span>
            <span className="text-xs">{blogPosts.length}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(activeCategory === cat ? null : cat)}
              className={`w-full flex items-center justify-between text-sm py-2 px-3 rounded-md transition-colors ${
                activeCategory === cat
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <span>{cat}</span>
              <span className="text-xs">{categoryCounts[cat]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tag Cloud */}
      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
          Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {allTags.map(([tag, count]) => (
            <Badge
              key={tag}
              variant={activeTag === tag ? "default" : "secondary"}
              className={`cursor-pointer transition-colors ${
                activeTag === tag ? "" : "hover:bg-primary/10 hover:text-primary"
              } ${count >= 4 ? "text-sm" : count >= 2 ? "text-xs" : "text-[11px]"}`}
              onClick={() => onTagChange(activeTag === tag ? null : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
          Posts Recentes
        </h4>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="flex gap-3 group"
            >
              <div className="w-14 h-14 rounded bg-secondary/80 flex items-center justify-center shrink-0">
                <BookOpen className="h-5 w-5 text-white/30" />
              </div>
              <div className="min-w-0">
                <h5 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h5>
                <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
