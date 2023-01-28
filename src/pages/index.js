import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })
  
export default function Home({folders}) {
  return <Layout>
    <Sidebar folders={folders} />
    <Header folders={folders} />
  </Layout>
}

export const getStaticProps = async() => {
  const res = await fetch('http://localhost:3000/api');
  const data = await res.json();
  return{
    props:{
      folders:data,
    }
  }
}
