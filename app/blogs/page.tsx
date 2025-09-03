import { Metadata } from "next";
import Link from "next/link";
import { Search, Calendar, User, Tag } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { BlogCard } from "@/components/ui/blog-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'CS Blogs - Expert Insights on Company Law & Compliance',
  description: 'Read the latest articles on company secretary services, corporate law updates, compliance requirements, and business regulations in India.',
  keywords: 'CS blogs, company law, compliance updates, corporate governance, regulatory changes, India',
};

// Sample blog data - in production this would come from a CMS or markdown files
const blogPosts = [
  {
    title: "New Companies Act Amendments 2024: What Every Business Owner Should Know",
    excerpt: "Comprehensive guide to the latest amendments in Companies Act 2013 and their impact on businesses across India. Learn about new compliance requirements and deadlines.",
    slug: "companies-act-amendments-2024-guide",
    date: "March 15, 2024",
    author: "CS Priya Sharma",
    tags: ["Companies Act", "Compliance", "Legal Updates"],
    readTime: "8 min read",
    category: "Legal Updates"
  },
  {
    title: "Complete Guide to OPC Registration: Benefits, Process & Documents Required",
    excerpt: "Everything you need to know about One Person Company registration in India. Step-by-step process, benefits, eligibility criteria, and required documents explained.",
    slug: "opc-registration-complete-guide-2024",
    date: "March 12, 2024", 
    author: "CS Rajesh Kumar",
    tags: ["OPC", "Registration", "Startup"],
    readTime: "6 min read",
    category: "Registration"
  },
  {
    title: "NCLT Fast Track Merger: Process, Timeline & Key Requirements",
    excerpt: "Detailed overview of NCLT fast track merger process for companies. Learn about eligibility, documentation, timeline, and recent procedural changes.",
    slug: "nclt-fast-track-merger-process-guide",
    date: "March 8, 2024",
    author: "CS Amit Patel", 
    tags: ["NCLT", "Merger", "Corporate Law"],
    readTime: "10 min read",
    category: "NCLT"
  },
  {
    title: "Annual ROC Filing Checklist 2024: Don't Miss These Important Deadlines",
    excerpt: "Complete checklist for annual ROC filings including forms AOC-4, MGT-7, ADT-1 and more. Important dates, penalties for late filing, and compliance tips.",
    slug: "annual-roc-filing-checklist-2024",
    date: "March 5, 2024",
    author: "CS Sneha Verma",
    tags: ["ROC Filing", "Annual Compliance", "Deadlines"],
    readTime: "7 min read",
    category: "Compliance"
  },
  {
    title: "Trademark Registration in India: Process, Fees & Common Mistakes to Avoid",
    excerpt: "Step-by-step guide to trademark registration in India. Learn about the application process, government fees, timeline, and common pitfalls to avoid.",
    slug: "trademark-registration-india-complete-guide",
    date: "March 1, 2024",
    author: "CS Vikram Singh",
    tags: ["Trademark", "IPR", "Registration"],
    readTime: "9 min read",
    category: "Intellectual Property"
  },
  {
    title: "Section 8 Company Registration: Complete Guide for NGOs and Non-Profits",
    excerpt: "Comprehensive guide to registering Section 8 companies in India. License requirements, benefits, compliance obligations, and application process explained.",
    slug: "section-8-company-registration-ngo-guide",
    date: "February 28, 2024",
    author: "CS Meera Joshi",
    tags: ["Section 8", "NGO", "Non-Profit"],
    readTime: "8 min read",
    category: "Registration"
  }
];

const categories = ["All", "Legal Updates", "Registration", "NCLT", "Compliance", "Intellectual Property"];
const popularTags = ["Companies Act", "ROC Filing", "NCLT", "Trademark", "OPC", "Annual Compliance", "Startup", "NGO"];

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="CS Insights & Updates"
        description="Stay informed with the latest articles on company law, compliance requirements, and regulatory changes"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blogs" }
        ]}
      />

      <Section>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                />
              </div>
              <Button className="bg-[#3AA6FF] hover:bg-[#2690E6] text-white">
                Search
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={`cursor-pointer ${
                    category === "All" 
                      ? "bg-[#3AA6FF] text-white" 
                      : "hover:bg-[#3AA6FF] hover:text-white"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Featured Post */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-lg p-8 text-white">
                <div className="flex items-center text-blue-100 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>March 15, 2024</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>CS Priya Sharma</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  New Companies Act Amendments 2024: What Every Business Owner Should Know
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Comprehensive guide to the latest amendments in Companies Act 2013 and their impact on businesses across India. Learn about new compliance requirements and deadlines.
                </p>
                <Button asChild className="bg-white text-[#3AA6FF] hover:bg-gray-100">
                  <Link href="/blogs/companies-act-amendments-2024-guide">Read Full Article</Link>
                </Button>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {blogPosts.slice(1).map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  date={post.date}
                  author={post.author}
                  tags={post.tags}
                  readTime={post.readTime}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button size="sm" className="bg-[#3AA6FF] text-white">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Subscribe to Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest CS insights and compliance updates directly in your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Enter your email" type="email" />
                  <Button className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  Popular Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-[#3AA6FF] hover:text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Articles</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <Link 
                      key={post.slug} 
                      href={`/blogs/${post.slug}`}
                      className="block p-4 hover:bg-gray-50 border-b last:border-b-0"
                    >
                      <h4 className="font-medium text-sm mb-1 hover:text-[#3AA6FF]">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}