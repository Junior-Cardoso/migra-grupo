import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import BlogSidebar from "@/components/BlogSidebar";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { BookOpen, ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <MigraNavigation />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground uppercase tracking-wide mb-4">
              Post não encontrado
            </h1>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao blog
              </Button>
            </Link>
          </div>
        </div>
        <MigraFooter />
      </div>
    );
  }

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      {/* Hero Banner */}
      <section className="pt-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <ScrollReveal>
            <Badge className="mb-4 bg-primary text-primary-foreground uppercase tracking-wider">
              {post.category}
            </Badge>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="w-12 h-1 bg-accent rounded-full mb-4" />
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {post.author.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="truncate max-w-[200px] sm:max-w-none">
                  {post.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Content */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Article */}
            <article>
              {/* Cover Image placeholder */}
              <div className="aspect-[16/9] rounded-lg bg-secondary/80 mb-8 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white/20" />
                </div>
              </div>

              {/* Article Content */}
              <div
                className="
                  [&>p]:text-foreground [&>p]:leading-relaxed [&>p]:mb-5
                  [&>h2]:font-heading [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:uppercase [&>h2]:tracking-wide [&>h2]:mt-10 [&>h2]:mb-4
                  [&>h3]:font-heading [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:uppercase [&>h3]:tracking-wide [&>h3]:mt-8 [&>h3]:mb-3
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                  [&>ul>li]:text-foreground [&>ul>li]:leading-relaxed
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-5 [&>ol]:space-y-2
                  [&>ol>li]:text-foreground [&>ol>li]:leading-relaxed
                  [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-5 [&>blockquote]:py-3 [&>blockquote]:my-6 [&>blockquote]:bg-muted/50 [&>blockquote]:rounded-r-md [&>blockquote]:italic [&>blockquote]:text-muted-foreground
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-border">
                <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link key={tag} to={`/blog`}>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-primary/10 hover:text-primary">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Prev / Next navigation */}
              <div className="mt-10 pt-6 border-t border-border grid sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link
                    to={`/blog/${prevPost.slug}`}
                    className="group p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                      <ArrowLeft className="h-3 w-3" /> Post anterior
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {prevPost.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost && (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="group p-4 rounded-lg border border-border hover:border-primary/30 transition-colors text-right"
                  >
                    <span className="text-xs text-muted-foreground flex items-center justify-end gap-1 mb-1">
                      Próximo post <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <BlogSidebar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                activeTag={activeTag}
                onTagChange={setActiveTag}
              />
            </div>
          </div>
        </div>
      </section>

      <MigraFooter />
    </div>
  );
};

export default BlogPost;
