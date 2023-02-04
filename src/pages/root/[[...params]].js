import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react';

const Root = ({params, data}) => {
  
  return (
    <Layout>
      <Sidebar folders={data}/>
      <Header folders={data} />
    </Layout>
  )
}

export default Root

export const getServerSideProps = async({params}) => {
  const path = params['params'].length>1 ? params['params'].join("/") : params['params'][0]
  const response = await fetch(`https://file-system-by-priya-jha.vercel.app/api/root/${path}`);
  // const response = await fetch(`http://localhost:3000/api/root/${params}`)
  const data = await response.json();
  return {
      props:{
          params,
          data: data['subFilesAndFolders'] ? data['subFilesAndFolders'] : []
      }
  }
}