import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>URmovies | Home</title>
        </Head>
        <Container>
        <p>Hola</p>
        {[1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23].map(e=>(<p key={e} >Hola Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium eos minima laborum fuga nemo soluta magni. Dolor nulla, molestiae quam, laborum pariatur iusto distinctio officia labore ipsa, cum architecto?</p>))}
      </Container>
      
    </Layout>
  )
}
