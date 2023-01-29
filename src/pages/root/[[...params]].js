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
  // console.log(`http://localhost:3000/api/root/${path}`)
  const response = await fetch(`http://localhost:3000/api/root/${path}`);
  // console.log("*******************************")
  // console.log(response)
  // console.log("*******************************")
  const data = await response.json();
  // const errorCode = response.ok ? false : response.statusCode;
  // console.log(errorCode)
  // console.log(data)
  return {
      props:{
          params,
          data: data['subFilesAndFolders'] ? data['subFilesAndFolders'] : []
      }
  }
}

// const Root = () => {
//   const [folders, setFolders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const params = router.query.params;
//   console.log("**************************88")
//   console.log(params)
//   const getSubFolders = async (params) => {
//     const path = params.length>1 ? params.join("/") : params[0];
//     console.log(`http://localhost:3000/api/root/${path}`)
//     const response = await fetch(`http://localhost:3000/api/root/${path}`);
//     const data = await response.json();
//     setFolders(data['subFilesAndFolders'] ? data['subFilesAndFolders'] : 0)
//     setLoading(false)
//   }
//   useEffect(()=>{
//     getSubFolders(params);
//   })
//   if(loading)
//   {
//     return<h2>loading</h2>
//   }