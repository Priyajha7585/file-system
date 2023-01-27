import React from 'react'
import styles from './Header.module.css'
import {FaSearch} from 'react-icons/fa'
import TopArrow from '../../assets/arrow-green-circle.png'
import Image from 'next/image'
import Mainwindow from '../Mainwindow/Mainwindow'


const Header = ({folders}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div className={styles.top_arrow}>
          <Image src={TopArrow} alt="TopArrow"/>
        </div>
        <div className={styles.breadcrumb}>
          root / movies / inception
        </div>
        <div className={styles.search_input}>
          <FaSearch className={styles.search_input_icon} />
          <input className={styles.search_input_input} placeholder='Search for anything' />
        </div>
      </div>
      <Mainwindow folders={folders}/>
    </div>
  )
}

export default Header
