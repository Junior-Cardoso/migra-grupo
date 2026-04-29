import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts, categories } from "@/data/blogPosts";
import character from "@/assets/characters/char-3.webp";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }

    if (activeCategory) {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    if (activeTag) {
      posts = posts.filter((p) => p.tags.includes(activeTag));
    }

    return posts;
  }, [searchQuery, activeCategory, activeTag]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: string | null) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleTagChange = (tag: string | null) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      <PageHero
        title="Blog"
        description="Acompanhe nossas publicações, novidades e reflexões sobre migrações e gestão contemporânea de populações."
        character={character}
        tint="teal"
      />

      {/* Filters */}
      <section className="border-b border-border bg-background sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar posts..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeCategory === null ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => handleCategoryChange(null)}
              >
                Todos
              </Badge>
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant={activeCategory === cat ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
          {activeTag && (
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <span>Filtrando por tag:</span>
              <Badge variant="default" className="cursor-pointer" onClick={() => handleTagChange(null)}>
                {activeTag} ×
              </Badge>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Main */}
            <div>
              {paginatedPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  {paginatedPosts.map((post) => (
                    <ScrollReveal key={post.id}>
                      <BlogCard post={post} />
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">
                    Nenhum post encontrado.
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Anterior
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i + 1}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      size="sm"
                      className="w-9"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                  >
                    Próximo
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <BlogSidebar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                activeTag={activeTag}
                onTagChange={handleTagChange}
              />
            </div>
          </div>
        </div>
      </section>

      <MigraFooter />
    </div>
  );
};

export default Blog;
