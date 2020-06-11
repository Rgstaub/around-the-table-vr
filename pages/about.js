import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const H1 = styled.h1``;

export default function Home() {
  return (
    <>
      <Head>
        <title>Around the Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <H1>Around the Table</H1>
        <h2>about</h2>
        <Link href="/">home</Link>
      </main>
    </>
  );
}
