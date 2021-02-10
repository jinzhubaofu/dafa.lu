import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug, getFilesTotal } from '@/lib/mdx';
import BlogLayout from '@/layouts/blog';
import MDXComponents from '@/components/MDXComponents';

export default function Blog({ post, newsletterCount }) {
  const { mdxSource, frontMatter } = post;
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return (
    <BlogLayout frontMatter={frontMatter} newsletterCount={newsletterCount}>
      {content}
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);
  const newsletterCount = await getFilesTotal('newsletter');
  return { props: { post, newsletterCount } };
}
