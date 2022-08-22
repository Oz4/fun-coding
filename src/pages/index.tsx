import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aws Fun Coding</title>
        <meta name="description" content="Challenges, components, and fun coding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          4ws
        </h1>
        <nav>
          {/* @ts-ignore */}
          {process?.env?.menu?.map((item) => (
            <Link key={item.link} href={item.link}>
              <Box className="text-base text-green-400 cursor-pointer transition-all font-semibold" _hover={{
                color: '#2DE370',
                opacity: 0.6
              }}>
                {item.name[0].toUpperCase() + item.name.slice(1)}
              </Box>
            </Link>
          ))}
        </nav>
      </main>
    </div >
  )
}

export default Home
