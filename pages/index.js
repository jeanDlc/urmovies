import Head from 'next/head'

import Container from '@material-ui/core/Container';
import Image from 'next/image';
export default function Home() {
  return (
    <Container>
      <Head>
        <title>URmovies</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Image
        src="/hero.svg"
        alt="URmovies"
        width={300}
        height={100}
        draggable={false}
      />
      <p>Hola</p>
    </Container>
  )
}
