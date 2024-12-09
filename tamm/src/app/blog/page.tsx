import BlogEntry from "@/components/BlogEntry/blog-entry";

const blogPosts = [
  {
    title: "10 Essential Spring Cleaning Tips for a Sparkling Home",
    slug: "10-essential-spring-cleaning-tips",
    author: {
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2023-05-15",
    readTime: 5,
    category: "Home Cleaning",
    excerpt:
      "Spring is the perfect time to give your home a thorough cleaning. Discover our top 10 tips to make your spring cleaning efficient and effective, leaving your home fresh and sparkling.",
    featuredImage: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "The Ultimate Guide to Eco-Friendly Cleaning Products",
    slug: "ultimate-guide-eco-friendly-cleaning-products",
    author: {
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2023-05-10",
    readTime: 7,
    category: "Green Cleaning",
    excerpt:
      "Make your cleaning routine more environmentally friendly with our comprehensive guide to eco-friendly cleaning products. Learn about natural alternatives and their benefits for your home and the planet.",
    featuredImage: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "How to Deep Clean Your Kitchen in 5 Easy Steps",
    slug: "deep-clean-kitchen-5-easy-steps",
    author: {
      name: "Carol White",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2023-05-05",
    readTime: 6,
    category: "Kitchen Cleaning",
    excerpt:
      "Transform your kitchen from grimy to gleaming with our simple 5-step deep cleaning process. We'll show you how to tackle even the toughest kitchen cleaning challenges efficiently.",
    featuredImage: "/placeholder.svg?height=300&width=600",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Latest Cleaning Tips & Insights
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogEntry key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
