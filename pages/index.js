import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

import { getAllBlogViews } from '@/lib/blog';
import { getFileBySlug } from '@/lib/mdx';

export default function Home({ newslettersCount, mostPopularBlogs }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m 逯大发
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          前端开发者，记录生活与工作。目前就职于字节跳动。
          <Link href="/guestbook">
            <a>sign my guestbook&nbsp;</a>
          </Link>
          while you're here.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        {mostPopularBlogs.map(({ title, summary, slug }) => (
          <BlogPost key={slug} title={title} summary={summary} slug={slug} />
        ))}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="React 2025"
          description="Build and deploy a modern Jamstack application using the most popular open-source software."
          href="https://react2025.com/"
          icon="react2025"
        />
        <ProjectCard
          title="Learn Next.js"
          description="A free video course for building static and server-side rendered applications with Next.js and React."
          href="https://masteringnextjs.com/"
          icon="nextjs"
        />
        <ProjectCard
          title="Fast Feedback"
          description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
          href="https://fastfeedback.io/"
          icon="fastfeedback"
        />
        <Timeline />
        <Subscribe totalIssues={newslettersCount} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const { blogs } = await getAllBlogViews();

  const mostPopularBlogs = await Promise.all(
    blogs.slice(0, 2).map(async ({ slug, view }) => {
      const blog = await getFileBySlug('blog', slug);
      return { ...blog.frontMatter, view };
    })
  );

  return { props: { newslettersCount: 10, mostPopularBlogs } };
}
