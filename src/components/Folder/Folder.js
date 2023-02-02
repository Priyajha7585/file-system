import React, { useState } from 'react';
import styles from './Folder.module.css';
import FolderImage from '../../assets/Shape.png'
import Image from 'next/image';
import Tooltip from '../Tooltip/Tooltip';

const Folder = ({folderName, contextTooltip}) => {
  // const [contextTooltip, setContextTooltip] = useState(false);
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
