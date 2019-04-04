import { Fragment } from 'react';
import Head from '../Head';

const Layout = ({ children }) => (
  <Fragment>
    <Head />
    <main>
      {children}
    </main>
  </Fragment>
);

export default Layout;