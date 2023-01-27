import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
// import SearchInput from '../components/SearchInput/SearchInput'
// import { useState } from 'react'
// import StatesTable from '../components/StatesTable/StatesTable'

const inter = Inter({ subsets: ['latin'] })
  
export default function Home({folders}) {
  // console.log(data)
//   const [keyword, setKeyword] = useState("");
//   const filteredStates = data.slice(1).filter(state => 
//     state.state.toLowerCase().includes(keyword)
//     );
//   const onInputChange = (e) => {
//     e.preventDefault();
//     setKeyword(e.target.value.toLowerCase())
//   }

  return <Layout>
    {/* {console.log(folders)} */}
    <Sidebar folders={folders} />
    <Header folders={folders} />
  </Layout>
}

export const getStaticProps = async(contex) => {
  // const res = await fetch('https://restcountries.com/v2/all');
  const res = await fetch('http://localhost:3000/api');
  const data = await res.json();
  // console.log(data['statewise'])
  return{
    props:{
      folders:data,
    }
  }
}
