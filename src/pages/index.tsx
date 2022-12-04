import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ShowNote from './../Components/Translate/ShowNotes/ShowNotes';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        dangerouslySetInnerHTML={{
          __html:
            "<p> This is Testing</p><ul><li>Hello</li></ul><p>Testing</p><ul><li>First</li></ul><ol><li>Second</li><li>Third</li><li>Fourth</li></ol>",
        }}
      ></div>

      <ShowNote />
    </div>
  );
}