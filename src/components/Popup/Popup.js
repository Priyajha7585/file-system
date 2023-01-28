import React, { useState } from 'react';
import styles from './Popup.module.css';
import CreateNew from '../../assets/Group 11.png'
import Image from 'next/image';
import Popup from 'reactjs-popup';
import {CgClose} from 'react-icons/cg';
import { useRouter } from 'next/router';


const PopupWindow = ({path}) => {
    const [formData, setFormData] = useState({
        type:"",
        name:"",
        creator:"",
        size:"",
        date:"",
        subFilesAndFolders:[]
    });
    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath)
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value.trim()
        });
    };

    const createFolder = async() => {
        const response = await fetch(path===undefined ? '/api' : '/api/root/'+path.join("/"), {
            method:"POST",
            body: JSON.stringify({formData}),
            headers:{
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        if(response.status < 300)
        {
            refreshData();
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createFolder();
        setFormData({
            type:"",
            name:"",
            creator:"",
            size:"",
            date:"",
            subFilesAndFolders:[]
        })
    }
  return (
        <Popup trigger=
            {<button className={styles.button}><Image src={CreateNew} alt="Create New"/> </button>}
            modal nested>
            { close => (
                <div className={styles.popup_window}>
                    <div className={styles.popup_header}>
                        Create New <button onClick={()=>close()}><CgClose className={styles.popup_close} /></button>
                    </div>
                    <form>
                        <div className={styles.popup_checkbox_button}>
                            <input type="radio" id="file" name="type" value="file" onChange={handleChange}/>
                            <label htmlFor="file">File</label>
                            <input type="radio" id="folder" name="type" value="folder" onChange={handleChange}/>
                            <label htmlFor="folder">Folder</label>
                        </div>
                        <div className={styles.popup_input}>
                            <input type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required/>
                            <input type="text" id="creator" name="creator" placeholder='Creator' value={formData.creator} onChange={handleChange} required/>
                            <input type="text" id="size" name="size" placeholder='Size' value={formData.size} onChange={handleChange} required/>
                            <input type="text" id="date" name="date" placeholder='Date' value={formData.date} onChange={handleChange} required/>
                        </div>
                        <div className={styles.popup_submit_button}>
                            <button onClick={handleSubmit}>Create</button>
                        </div>
                    </form>
                </div>)
            }
        </Popup>
  )
}

export default PopupWindow
