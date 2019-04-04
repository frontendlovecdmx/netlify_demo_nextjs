const fetch = require('isomorphic-unfetch')

module.exports = {
  exportPathMap: async function () {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_page=1'
    )

    const posts = await response.json();

    const pages = posts.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/blog/${post.id}`]: {
            page: '/post',
            query: { id: post.id }
          }
        }),
      {}
    );
    console.log(pages);

    return Object.assign({}, pages, {
      '/': { page: '/index' },
      '/blog': { page: '/blog' },
      '/about': { page: '/about' },
    });
  },
}
