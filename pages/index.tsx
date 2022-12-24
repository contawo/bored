import styles from '../styles/Home.module.css'
import HomeDisplay from '../components/HomeDisplay';
import ShowContent from '../components/ShowContent';
import { GetServerSideProps } from 'next';
import Head from 'next/head'

interface Props {
  results : {
      activity: string,
      type: string,
      participants: number,
      price: number,
      link: string,
      key: string,
      accessibility: number
  }
}

export default function Home({results}  : Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>I am bored</title>
      </Head>
      <HomeDisplay />
      <ShowContent results={results} />
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async () => {
  const res = await fetch("https://www.boredapi.com/api/activity");
  const data = await res.json();
  return {
      props: {
          results: data
      }
  }
}
