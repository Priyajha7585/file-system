import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import {IoMdArrowDropup} from 'react-icons/io';
import {IoMdArrowDropdown} from 'react-icons/io';

const Sidebar = ({folders}) => {
    const [show, setShow] = useState(0);
    const updateShow = (id) => {
        if(show===0)
        {
            setShow(id)
        }
        else if(show===id)
        {
            setShow(0)
        }
        else{
            setShow(0)
            setShow(id)
        }
    }
  return (
    <div className={styles.container}>
        
        <div className={styles.root}>
            ROOT
        </div>
        {folders!==0 ? folders.map((folder)=>(
            <div key={folder.id}>
                <div className={styles.list} onClick={()=>updateShow(folder.id)}>
                    {folder.name} {folder.type==="folder" && <button className={styles.list_button} >{show===folder.id?<IoMdArrowDropup/>:<IoMdArrowDropdown/>}</button>}
                    
                </div>
                {
                    folder.subFilesAndFolders &&
                    <div key={folder.id} className={show===folder.id ? styles.sublistShow : styles.sublistHide} id={folder.id}>
                    {folder.subFilesAndFolders.map((f)=><p key={f.id}>{f.name}</p>)}
                </div>
                }
                
            </div>
        )) : ""}

    </div>
  )
}

export default Sidebar
