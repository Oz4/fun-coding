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
        <nav className='absolute bottom-0 left-0 flex justify-evenly p-4 w-full overflow-x-auto border-t border-gray-600' id='scroll-bar-green'>
          {/* @ts-ignore */}
          {process?.env?.menu?.filter(item => item.name !== 'Home').map((item) => (
            <Link key={item.link} href={item.link}>
              <Box className="text-base text-green-400 cursor-pointer transition-all font-semibold mr-2 min-w-[100px]" _hover={{
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
