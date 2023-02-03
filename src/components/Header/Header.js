

import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import {FaSearch} from 'react-icons/fa'
import TopArrow from '../../assets/arrow-green-circle.png'
import Image from 'next/image'
import Mainwindow from '../Mainwindow/Mainwindow'
import { useRouter } from 'next/router'


const Header = ({folders}) => {
  const [input, setInput] = useState('');
  const router = useRouter();
  const filteredFolder = folders.length!==0 ? folders.filter((f)=>f.name.toLowerCase().includes(input.toLowerCase())) : [];
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div className={styles.breadcrumb_toparrow}>
          <div className={styles.top_arrow}>
            <button onClick={()=>router.back()}>
              <Image src={TopArrow} alt="TopArrow"/>
            </button>
          </div>
          <div className={styles.breadcrumb}>
            {router.query.params===undefined ? <>/</> : router.query.params.map((i)=><> / {i}</>)}
          </div>

        </div>
        <div className={styles.search_input}>
          <FaSearch className={styles.search_input_icon} />
          <input className={styles.search_input_input} placeholder='Search for anything' value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
      </div>
      <Mainwindow folders={filteredFolder}/>
    </div>
  )
}

export default Header



