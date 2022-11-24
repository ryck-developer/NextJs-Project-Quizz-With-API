import React from 'react';
import useSWR from 'swr';
import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error } = useSWR(
    'https://nextjsjqnqnm-1bvd--3000.local-corp.webcontainer.io/api/perguntas',
    fetcher
  );

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';

  return data.questions.map((todo) => (
    <div>
      <p key={todo} className={styles.paragraph}>
        {todo.pergunta}
      </p>
      <p key={todo} className={styles.alternativas}>
        A) {todo.respostas.a}
      </p>
      <p key={todo} className={styles.alternativas}>
        B) {todo.respostas.b}
      </p>
      <p key={todo} className={styles.alternativas}>
        C) {todo.respostas.c}
      </p>
      <p key={todo} className={styles.alternativas}>
        D) {todo.respostas.d}
      </p>
      <p>---------</p>
    </div>
  ));
}
