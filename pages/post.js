import { Component } from 'react';
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout';

class Post extends Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${query.id}/`
    )
    const post = await response.json()
    return { ...post }
  }

  render() {
    const { title, body } = this.props;
    return (
      <Layout>
        <h1>{title}</h1>
        <p>{body}</p>
      </Layout>
    );
  }
}

export default withRouter(Post);