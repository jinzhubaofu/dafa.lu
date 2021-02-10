import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

import { getFilesTotal } from '@/lib/mdx';

export default function Home({ newslettersCount }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m 逯大发
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          前端开发者，尝试写一些技术文章。目前就职于字节跳动。
          <Link href="/guestbook">
            <a>sign my guestbook&nbsp;</a>
          </Link>
          while you're here.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="新玩具，败家新高度！KDFans HHKB D60 键盘上手体验"
          summary="12312"
          slug="my-first-hhkb-keyboard"
        />
        <BlogPost
          title="如何在 macOS 上愉快、高效地使用 60% 配列键盘？"
          summary="没有方向键你搞个毛啊？"
          slug="how-to-use-a-60-keyword-on-macos-efficiently"
        />
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
  const newslettersCount = await getFilesTotal('newsletter');
  return { props: { newslettersCount } };
}
