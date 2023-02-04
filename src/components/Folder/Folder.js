import React from 'react';
import styles from './Folder.module.css';
import FolderImage from '../../assets/Shape.png'
import Image from 'next/image';

const Folder = ({folderName}) => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.container_image}>
            <Image src={FolderImage} alt="Folder"/>
      </div>
      <div className={styles.container_text}>
        {folderName}
      </div>
    </div>
    </>
  )
}

export default Folder
