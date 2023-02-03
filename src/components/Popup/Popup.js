import React from 'react';
import styles from './Popup.module.css';
import CreateNew from '../../assets/Group 11.png'
import Image from 'next/image';
import Popup from 'reactjs-popup';
import {CgClose} from 'react-icons/cg';
import {useForm} from 'react-hook-form';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const PopupWindow = ({path,router}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const onSubmit = (data) => {
        data['subFilesAndFolders'] = []
        createFolder(data)
    }

    const createFolder = async(formData) => {
        const response = await fetch(path===undefined ? '/api' : '/api/root/'+path.join("/"), {
            method:"POST",
            body: JSON.stringify({formData}),
            headers:{
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        reset()
        if(response.status < 300)
        {
            router.replace(router.asPath)
        }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div id="my-anchor-element" className={styles.popup_checkbox_button}>
                            <input type="radio" id="file" name="type" value="file" {...register('type', {required:"Type is required!!!"})}/>
                            <label htmlFor="file">File</label>
                            <input type="radio" id="folder" name="type" value="folder" {...register('type', {required:"Type is required!!!"})}/>
                            <label htmlFor="folder" id="Folder">Folder</label>
                        </div>
                        {errors?.type?.message && <Tooltip anchorId="Folder" content={errors?.type?.message} place="right" variant='error' isOpen /> }
                        <div className={styles.popup_input}>
                            <input type="text" id="name" name="name" placeholder='Name' {...register('name', {required:"File name is required!!!"})}/>
                            {errors?.name?.message && <Tooltip anchorId="name" content={errors?.name?.message} place="right" variant='error' isOpen /> }
                            <input type="text" id="creatorName" name="creatorName" placeholder='Creator' {...register('creatorName', {required:"Creator is required!!!"})}/>
                            {errors?.creatorName?.message && <Tooltip anchorId="creatorName" content={errors?.creatorName?.message} place="right" variant='error' isOpen /> }
                            <input type="text" id="size" name="size" placeholder='Size' {...register('size', {required:"Size is required!!!"})}/>
                            {errors?.size?.message && <Tooltip anchorId="size" content={errors?.size?.message} place="right" variant='error' isOpen /> }
                            <input type="date" id="createdOn" name="createdOn" placeholder='Date' {...register('createdOn', {required:"Date is required!!!"})}/>
                            {errors?.createdOn?.message && <Tooltip anchorId="createdOn" content={errors?.createdOn?.message} place="right" variant='error' isOpen /> }
                        </div>
                        <div className={styles.popup_submit_button}>
                            <button type='submit'>Create</button>
                        </div>
                    </form>
                </div>)
            }
        </Popup>
  )
}

export default PopupWindow



