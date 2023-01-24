import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import {IoMdArrowDropup} from 'react-icons/io';
import {IoMdArrowDropdown} from 'react-icons/io';

const Sidebar = ({folders}) => {
    const [show, setShow] = useState(0);
    const updateShow = (id) => {
        console.log(id)
    }
  return (
    <div className={styles.container}>
        
        <div className={styles.root}>
            ROOT
        </div>
        {folders.map((folder)=>(
            <div className={styles.list}>

                {folder.id}. {folder.name} <button ><IoMdArrowDropdown onClick={()=>updateShow(folder.id)}/></button>
                <div className={styles.sublist} id={folder.id}>
                {folder.filesAndFolders.map((f)=><p>{f.id}. {f.name}</p>)}
                </div>
            </div>
        ))}

        <hr/>
    </div>
  )
}

export default Sidebar
