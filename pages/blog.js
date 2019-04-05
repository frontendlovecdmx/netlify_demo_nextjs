import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout';

class Blog extends Component {
  static async getInitialProps () {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_page=1'
    )
    const posts = await response.json()
    return { posts }
  }

  render() {
    const { posts } = this.props;

    return (
      <Layout>
        <h1>Blog</h1>
        <p>Aquí colocaremos el listado de entradas de tu blog.</p>
        <p>Holaaaa amigos :D</p>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link
                as={`/blog/${post.id}`}
                href={{ pathname: '/post', query: { id: post.id }}}
              >
                <a>
                  <h2>{post.title}</h2>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}


export default Blog;