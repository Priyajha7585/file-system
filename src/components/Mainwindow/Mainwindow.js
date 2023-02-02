import File from '@/components/File/File';
import Folder from '@/components/Folder/Folder';
import PopupWindow from '@/components/Popup/Popup_';
import Link from 'next/link';
import React from 'react';
import styles from './Mainwindow.module.css';
import { useRouter } from 'next/router';
import Popup from 'reactjs-popup';
import InfoPopup from '../InfoPopup/InfoPopup';


const Mainwindow = ({folders}) => {
  const router = useRouter();
  const params = router.query["params"];
 
  const handleDelete = async(name) => {
   const response = await fetch(`/api/${router.asPath}/${name}`, {
    method:"DELETE",
   })
   const data = await response.json();
   router.replace(router.asPath)
  }
  return (
  <div className={styles.container}>
    {folders!==0 ? folders.map((fileOrfolder)=>
    (
     <div key={fileOrfolder.id}>
     {fileOrfolder.type==="file" || fileOrfolder.name.includes('.') ?
     
     <Popup trigger=
        {<Link href={``} >
         <File fileName={fileOrfolder.name}/>
         </Link>} on='right-click'
        position="bottom center">
        <div className={styles.options_div} >
          <div className={styles.options_div_option}>Open</div>
          <div className={styles.options_div_option}><InfoPopup fileOrfolder={fileOrfolder} /></div>
          <div className={styles.options_div_option_delete}><button onClick={()=>handleDelete(fileOrfolder.name)}>Delete</button></div>
         </div> 
     </Popup>
     :
     <Popup trigger=
        {<Link href={`/root/${params===undefined ? fileOrfolder.name : params.join("/")+"/"+fileOrfolder.name}`} >
         <Folder folderName={fileOrfolder.name}/>
         </Link>} on='right-click'
        position="bottom center">
        <div className={styles.options_div} >
         <div className={styles.options_div_option}><Link href={`/root/${params===undefined ? fileOrfolder.name : params.join("/")+"/"+fileOrfolder.name}`} className={styles.options_div_option_Link}>Open</Link></div>
         <div className={styles.options_div_option}><InfoPopup fileOrfolder={fileOrfolder} /></div>
         <div className={styles.options_div_option_delete}><button onClick={()=>handleDelete(fileOrfolder.name)}>Delete</button></div>
         </div> 
     </Popup>
     }
     </div>
    )
    ) : ""}
    {/* <PopupWindow path={params}/>  */}
    <PopupWindow path={params} router={router}/>
  </div>
 )
}

export default Mainwindow
