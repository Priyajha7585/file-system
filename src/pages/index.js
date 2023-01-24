import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
// import SearchInput from '../components/SearchInput/SearchInput'
// import { useState } from 'react'
// import StatesTable from '../components/StatesTable/StatesTable'

const inter = Inter({ subsets: ['latin'] })
  
export default function Home({data}) {
  const [folders, setFolders] = useState([]);
  const getData = async() => {
    const res = await fetch('http://localhost:3000/api');
    const data = await res.json();
    setFolders(data);
  }
  useEffect(()=>{
    getData()

  },[])
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
    {/* <h1>This is the layout component</h1> */}
    {console.log(data)}
    <Sidebar folders={folders} />
    
    {/* <div className={styles.inputContainer}>
      <div className={styles.input}>
        <SearchInput placeholder="Filter by State" value={keyword} onChange={e=>onInputChange(e)}/>
      </div>
    </div>
    
    <StatesTable data={filteredStates} /> */}
  </Layout>
}

export const getStaticProps = async() => {
  // const res = await fetch('https://restcountries.com/v2/all');
  const res = await fetch('https://data.covid19india.org/data.json');
  const data = await res.json();
  // console.log(data['statewise'])
  return{
    props:{
      data:data['statewise'],
    }
  }
}
