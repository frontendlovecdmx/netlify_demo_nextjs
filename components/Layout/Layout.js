import Head from '../Head';
import Navigation from '../Navigation';

const Layout = ({ children }) => (
  <section>
    <Head />
    <main>
      <Navigation />
      {children}
    </main>
  </section>
);

export default Layout;