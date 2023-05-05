import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Image from 'app/components/atoms/Image'
import Button from 'app/components/atoms/Button'
import logo from 'svg/logo.svg'

import styles from './HomePage.module.css'

const HomePage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Cruisebound Demo - Home</title>
      <meta
        name="description"
        content="Sail away, sail away sail away sail away"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Cruisebound Demo</h1>

      <p className={styles.description}>
        <Button
          shadow
          size="large"
          text={<Link href="/sailings">View Demo</Link>}
        />
        <Button
          shadow
          size="large"
          text={
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jblossomweb/cruisebound-demo"
            >
              View Code
            </a>
          }
        />
      </p>
      <div className={styles.footer}>
        <Image src={logo} width={176} height={86} alt="Cruisebound" />
      </div>
    </main>
  </div>
)

export default HomePage
