import config from '../config';

const TWITTER_SEARCH_URL = 'https://mobile.twitter.com/search';

export const getDiscussionUrl = (slug) => {
  let { hostname, prefix } = config.site;
  let blogUrl = `https://${hostname}/${prefix ? '/' + prefix : ''}/${slug}`;
  return `${TWITTER_SEARCH_URL}?q=${encodeURIComponent(blogUrl)}`;
};

export const getEditUrl = (slug) =>
  `https://github.com/${config.socialPlatforms.github}/${config.repository}/edit/main/data/blog/${slug}.mdx`;
