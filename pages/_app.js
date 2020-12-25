import '../styles/globals.css';
import Layout from '../components/Layout';

function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
