import { getAllBlogViews } from '@/lib/blog';

export default async (_, res) => {
  const report = await getAllBlogViews();
  return res.status(200).json(report);
};
