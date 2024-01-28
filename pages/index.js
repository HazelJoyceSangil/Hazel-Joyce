import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <div style={{ textAlign: 'center' }}>
      I am 19 years old and I live in Apalit, Pampanga.
      My hobbies include cooking, cleaning, shopping, browsing facebook, and scrolling through tiktok.
      I took Computer Engineering because computers are my passion.
      I see myself in the next 5 years living in another country, working hard.
      </div>
      <div style={{ textAlign: 'center' }}>
        <strong>EXPECTATIONS IN THIS SUBJECT:</strong>
      <ul style={{ listStyleType: 'disc', textAlign: 'left', marginLeft: '2em' }}>
          <li>Hard </li>
          <li>Challenging </li>
          <li>Gain more knowledge </li>
        </ul>
      </div>
      </section>
    </Layout>
  );
}