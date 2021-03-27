import Head from 'next/head';

import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>URmovies | Home</title>
        </Head>
        <Hero/>
      <p>Hola</p>
      <p>Hola</p>
      <p>Hola</p>
      <p>Hola</p>
      <p>Hola</p>
      <p>Hola</p>
      <p>Hola</p>
      <p>Hola</p>
      {[1,2,3,4,5,6,7,8,9,10,11].map(e=><p key={e}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas similique laudantium, accusantium, in optio provident dolorum nisi obcaecati voluptate recusandae qui quos quod odit ducimus harum non. Ipsum, suscipit itaque.</p>)}
      {[1,2,3,4,5,6,7,8,9,10,11].map(e=><p key={e}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsam minus. Fugiat quod culpa repellendus, aliquid laudantium sint a soluta nemo suscipit itaque? Aliquid repellat a laborum, nam laboriosam omnis.</p>)}
      {[1,2,3,4,5,6,7,8,9,10,11].map(e=><p key={e}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsam minus. Fugiat quod culpa repellendus, aliquid laudantium sint a soluta nemo suscipit itaque? Aliquid repellat a laborum, nam laboriosam omnis.</p>)}
    </Layout>
  )
}
