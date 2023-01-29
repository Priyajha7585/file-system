import React from 'react';
import styles from './Tooltip.module.css'

const Tooltip = () => {
  return (
    <div className={styles.options_div} >
      <div className={styles.options_div_option}>Open</div>
      <div className={styles.options_div_option}>Get info</div>
      <div className={styles.options_div_option_delete}>Delete</div>
    </div>  
  )
}

export default Tooltip
