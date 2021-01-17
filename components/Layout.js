import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <meta property="og:image" content="/img/blog-preview.png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <title>{pageTitle}</title>
      </Head>

      <main>
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </main>
    </>
  );
}
