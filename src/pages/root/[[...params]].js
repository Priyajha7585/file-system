import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import Mainwindow from '@/components/Mainwindow/Mainwindow'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react';

const Root = ({params, data}) => {
  
  return (
    <Layout>
      <Sidebar folders={data}/>
      <Header folders={data} />
      {/* This is root page
      {console.log(params)}
      {data['subFilesAndFolders'].map((i)=><p>{i.id}. {i.name}</p>)} */}
    </Layout>
  )
}

export default Root

export const getServerSideProps = async({params}) => {
  // console.log(params['params'])
  // console.log(params['params'].join("/"))
  // const d = params['params'].join("/")
  const path = params['params'].length>1 ? params['params'].join("/") : params['params'][0]
  console.log(`http://localhost:3000/api/root/${path}`)
  const response = await fetch(`http://localhost:3000/api/root/${path}`);
  const data = await response.json();
  // console.log(data)
  return {
      props:{
          params,
          data: data['subFilesAndFolders'] ? data['subFilesAndFolders'] : 0
          // data
      }
  }
}
