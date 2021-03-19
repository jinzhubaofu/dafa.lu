import db from '@/lib/firebase';

export async function getAllBlogViews() {
  const snapshot = await db.ref('views').once('value');
  const views = snapshot.val();

  let allViews = 0;
  let list = [];
  for (let [slug, view] of Object.entries(views)) {
    allViews += view;
    list.push({ slug, view });
  }

  return {
    allViews,
    blogs: list.sort((a, b) => b.view - a.view)
  };
}
