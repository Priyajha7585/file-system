import React from 'react';
import { CgClose } from 'react-icons/cg';
import Popup from 'reactjs-popup';
import styles from './InfoPopup.module.css';
import FileImage from '../../assets/noun_File_1884427.png'
import FolderImage from '../../assets/Shape.png'
import Image from 'next/image';

const InfoPopup = ({fileOrfolder}) => {
  return (
    <Popup trigger=
        {<button className={styles.button}>Get Info</button>}
        modal nested>
            { close => (
        <div className={styles.container}>
            <div className={styles.heading}>File Info <button onClick={()=>close()} className={styles.popup_close}><CgClose /></button></div>
            <div className={styles.image}><Image src={fileOrfolder.type==="file" || fileOrfolder.name.includes('.') ? FileImage : FolderImage} alt="Folder"/></div>
            <div className={styles.detail}><p className={styles.p1}>Name :</p><p className={styles.p2}>{fileOrfolder.name}</p></div>
            <div className={styles.detail}><p className={styles.p1}>Size :</p><p className={styles.p2}>{fileOrfolder.size}</p></div>
            <div className={styles.detail}><p className={styles.p1}>Creator Name :</p><p className={styles.p2}>{fileOrfolder.creatorName}</p></div>
            <div className={styles.detail}><p className={styles.p1}>Created Date :</p><p className={styles.p2}>{fileOrfolder.createdOn}</p></div>
        </div>)}
    </Popup>
  )
}

export default InfoPopup