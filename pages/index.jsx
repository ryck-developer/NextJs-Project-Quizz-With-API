import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Quizz from './Quizz';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div>
          <Quizz />
        </div>
      </main>

      <footer className={styles.footer}>Luiz Henrique Chaves</footer>
    </div>
  );
}
