import File from '@/components/File/File';
import Folder from '@/components/Folder/Folder';
import PopupWindow from '@/components/Popup/Popup';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Mainwindow.module.css';
import { useRouter } from 'next/router';

const Mainwindow = ({folders}) => {
    const router = useRouter();
    const params = router.query["params"];
    return (
    <div className={styles.container}>
        {folders!==0 ? folders.map((fileOrfolder)=>
        (
          <div key={fileOrfolder.id}>
          {fileOrfolder.type==="file" || fileOrfolder.name.includes('.') ?
          <File fileName={fileOrfolder.name}/>:
          <Link href={`/root/${params===undefined ? fileOrfolder.name : params.join("/")+"/"+fileOrfolder.name}`}><Folder folderName={fileOrfolder.name}/></Link>}
          </div>
        )
        ) : ""}
        <PopupWindow path={params}/>        
    </div>
  )
}

export default Mainwindow
