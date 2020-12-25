function importAll(post) {
  return post.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: post(fileName),
  }));
}

export const posts = importAll(require.context('./pages/blog', true, /\.mdx$/));
