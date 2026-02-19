"use client";

import { motion } from "framer-motion";
import { RevealHeader } from "@/components/ui/reveal-header";
import { useState } from "react";
import { ArticleModal } from "@/components/ui/article-modal";
import Image from "next/image";

const posts = [
  {
    category: "Journey",
    readTime: "5 min read",
    title: "From Science to Code: My Transition",
    image: "/images/insights/commerce_to_code.png",
    excerpt: "How I pivoted from a B.science degree to Full Stack Development in under a year. The challenges, the late nights, and the breakthroughs.",
    content: `My journey into tech began with a simple curiosity about how applications and websites actually work behind the scenes. Coming from a B.Sc. background, I was rooted in scientific thinking, but I found myself drawn more toward logic, problem-solving, and building things digitally. What started as exploration soon became a serious goal.

        I spent my days learning core concepts and my evenings diving into coding—experimenting with JavaScript, working with databases, and building small projects. There were moments of doubt and long debugging nights, but every small win—getting a feature to work, connecting a backend to a frontend, or deploying a project—boosted my confidence.`
},
  {
  category: "Tech",
  readTime: "6 min read",
  title: "My Journey as a MERN Full Stack Developer",
  image: "/images/insights/microservices_architecture.png",
  excerpt: "How I build full-stack applications using MongoDB, Express, React, and Node.js with secure authentication and real-world features.",
  content: `Becoming a MERN full stack developer has been a journey of continuous learning and building. I started by understanding how frontend and backend systems communicate, then gradually moved into creating complete applications from scratch.

My typical stack revolves around MongoDB, Express.js, React, and Node.js. On the frontend, React helps me build dynamic and responsive user interfaces. On the backend, Node.js and Express allow me to design scalable APIs and handle server-side logic efficiently.

Security and reliability are key in my projects. I implement authentication and authorization using JSON Web Tokens (JWT) and bcryptjs for password hashing. This ensures user data stays protected while maintaining smooth login and session management.

I also integrate tools like Nodemailer for email notifications, enabling features such as account verification, password resets, and order confirmations. Managing databases with MongoDB gives flexibility in handling real-world data and relationships.

Across my projects, I’ve implemented full CRUD operations, role-based access, carts, offers, and payment-ready flows. Each project strengthened my understanding of real-world application architecture, performance, and user experience.

This journey continues to refine my problem-solving skills and deepen my passion for full stack development, where I enjoy turning ideas into functional, user-friendly applications.`
},
  {
  category: "Tech",
  readTime: "6 min read",
  title: "Why I chose Next.js for EduSaving",
  image: "/images/insights/nextjs_ecommerce.png",
  excerpt: "How Next.js helped me build EduSaving, a study material marketplace where users can buy and sell with strong SEO and performance.",
  content: `While building EduSaving, my education material reselling platform, I knew performance and discoverability were critical. Since users can both buy and sell study materials, the platform needed to load fast, rank well on search engines, and handle dynamic content smoothly.

At first, a typical React setup seemed enough, but an e-commerce-style marketplace needs more than just Client-Side Rendering. Product listings, search results, and material pages should be SEO-friendly so students can easily find them online.

Next.js solved these challenges effectively.

- **Server-Side Rendering (SSR)**: Helped render listings and product pages on the server, improving SEO and initial load speed.
- **Static Site Generation (SSG)**: Perfect for study materials that don’t change frequently, giving fast and cached page loads.
- **API Routes**: Allowed me to build backend logic like authentication, admin approvals, and CRUD operations within the same project.
- **Image Optimization**: Automatically optimized uploaded study material images for better performance.

EduSaving includes authentication and authorization, admin approval for listings, cart functionality, offers, and online order flows. Next.js made it easier to manage both frontend and backend concerns while keeping the app scalable.

The result is a fast, SEO-friendly education marketplace where students can easily sell and purchase learning materials. Choosing Next.js helped me deliver a smoother and more professional user experience. Still i have been Working on that Project and will be live soon.`
},
  {
  category: "Design",
  readTime: "4 min read",
  title: "The Art of Minimalist UI",
  image: "/images/insights/minimalist_ui.png",
  excerpt: "Why 'Less is More' is a practical principle for modern web apps. A look at whitespace, typography, and purposeful motion.",
  content: `Minimalism in UI design is often misunderstood as removing elements. In reality, it's about focusing on what matters most to the user.

When designing this portfolio, I followed three principles:

1. **Whitespace is Active**  
Whitespace isn't empty; it guides attention and reduces cognitive load.

2. **Typography as Interface**  
Clear type hierarchy reduces the need for excessive visual elements.

3. **Intentional Motion**  
Animations should provide feedback or continuity, not distraction.

By removing the non-essential, the essential becomes clearer and more impactful.`
},
 {
  category: "Tech",
  readTime: "5 min read",
  title: "Deploying Full-Stack Apps with Vercel & Render",
  image: "/images/insights/docker_k8s.png",
  excerpt: "How I deploy and manage my full-stack applications using Vercel for frontend and Render for backend services.",
  content: `Building an application is only part of the journey—making it live and reliable is where real learning happens. As I started shipping full-stack projects, I needed a simple but powerful deployment workflow.

For the frontend, I use Vercel. It makes deploying React and Next.js apps seamless with automatic builds, previews, and global CDN delivery. Every push to GitHub can trigger a deployment, which makes iteration fast and efficient.

For backend services, I use Render. It allows me to host Node.js and Express APIs with environment variables, database connections, and continuous deployment. Managing backend services separately also keeps the architecture clean.

Key things I learned during deployment:
- **Environment Variables**: Protecting secrets like API keys and database URIs.
- **Production Builds**: Optimizing apps for speed and performance.
- **CORS & API Routing**: Ensuring frontend and backend communicate securely.
- **Monitoring Logs**: Debugging real-world issues after deployment.

Using Vercel and Render helped me understand that deployment is not just a final step—it's part of the development lifecycle. Shipping real applications taught me how to think about reliability, performance, and user experience in production environments.`
}

];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <section id="blog" className="py-24 bg-background border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <RevealHeader className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Insights
          </RevealHeader>
          <div className="hidden md:block text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Read my latest thoughts
          </div>
        </div>

        {/* Bento / Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer bg-accent/5 border border-black/5 dark:border-white/5 ${index === 0 ? "md:col-span-2" : "md:col-span-1"}`}
              onClick={() => setSelectedPost(post)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 lg:bg-black/40 lg:group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
                  <span className="px-2 py-1 border border-white/20 rounded-full bg-white/10 backdrop-blur-md">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className={`font-bold text-neon-blue lg:text-white mb-3 leading-tight lg:group-hover:text-neon-blue transition-colors ${index === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                  {post.title}
                </h3>

                {index === 0 && (
                  <p className="text-white/80 text-base md:text-lg font-serif italic line-clamp-2 max-w-xl">
                    {post.excerpt}
                  </p>
                )}

                <div className="mt-6 transform translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-bold uppercase tracking-wider text-neon-blue flex items-center gap-2">
                    Read Article <span>→</span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <ArticleModal
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          article={selectedPost}
        />
      </div>
    </section>
  );
}
