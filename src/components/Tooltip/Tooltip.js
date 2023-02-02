import Link from 'next/link';
import React from 'react';
import styles from './Tooltip.module.css'

const Tooltip = () => {
  return (
    <div className={styles.options_div}>
      <div className={styles.options_div_option}>Open</div>
      <div className={styles.options_div_option}>Get info</div>
      <Link href='http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/#artboard0'>

      <div className={styles.options_div_option_delete}>Delete</div>
      </Link>
    </div>  
  )
}

export default Tooltip
