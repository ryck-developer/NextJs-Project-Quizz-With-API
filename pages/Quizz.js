import React from 'react';
import useSWR from 'swr';
import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error } = useSWR('/api/perguntas', fetcher);

  function handleClick(e, a, cont) {
    console.log(a);
    console.log(cont);
  }

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';

  return data.questions.map((todo) => (
    <div className={styles.boxquestion}>
      <p className={styles.paragraph}>
        {todo.id} - {todo.pergunta}
      </p>

      <button
        className={styles.alternativas}
        onClick={(e) => handleClick(e, 'a', todo.id)}
      >
        A) {todo.respostas.a}
      </button>

      <button
        className={styles.alternativas}
        onClick={(e) => handleClick(e, 'b', todo.id)}
      >
        B) {todo.respostas.b}
      </button>

      <button
        className={styles.alternativas}
        onClick={(e) => handleClick(e, 'c', todo.id)}
      >
        C) {todo.respostas.c}
      </button>

      <button
        className={styles.alternativas}
        onClick={(e) => handleClick(e, 'd', todo.id)}
      >
        D) {todo.respostas.d}
      </button>
      {/*<a className={styles.jsxblackbutton}>Próximo</a>*/}
    </div>
  ));
}
