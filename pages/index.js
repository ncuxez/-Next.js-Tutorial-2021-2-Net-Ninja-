import Link from 'next/link';
import Head from "next/head";
import classes from '../styles/Home.module.css'

export default function Home() {

  return (
      <>
          <Head>
              <title>Ninjas App | Homepage</title>
              <meta name="keywords" content="ninjas" />
          </Head>
          <main >
              <h2 className={classes.title}>Homepage</h2>
              <p className={classes.text}>
                  Forget the term 'lifecycle' and start thinking 'What data change do I want to respond/re-render to'.
                  Note: when a state hook value changes, the component re-renders and re-declares all non-hook variable values
              </p>
              <Link href={`/ninjas`}><a className={classes.btn}>Ninjas List</a></Link>
          </main>
      </>
  )
}
