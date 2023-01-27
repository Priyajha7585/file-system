import React from 'react';
import styles from './File.module.css';
import FileImage from '../../assets/noun_File_1884427.png'
import Image from 'next/image';

const File = ({fileName}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
            <Image src={FileImage} alt="File"/>
      </div>
      <div className={styles.container_text}>
        {fileName}
      </div>
    </div>
  )
}

export default File
