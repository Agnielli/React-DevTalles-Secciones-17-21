import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from "react"

import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { setActiveNote, startSavingNote } from '../../store'
import { ImageGallery } from '../components'
import { useForm } from "../../hooks"

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active: note, messageSaved, isSaving } = useSelector( state => state.journal )  // useSelector es un hook de Redux que permite acceder al estado global de la aplicación. En este caso, se accede al estado de la nota activa (active) del journal.
  
  const { body, title, date, onInputChange, formState } = useForm( note )

  const dateString = useMemo( () => {
    const newDate = new Date( date )
    return newDate.toUTCString()
  }, [date])

  const fileInputRef = useRef();

  useEffect( () => {
    dispatch( setActiveNote(formState) )
  }, [formState])

  useEffect( () => {
    (messageSaved.length) > 0 
      ? Swal.fire('Nota actualizada', messageSaved, 'success') 
      : null
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch( startSavingNote() )
    console.log('Guardando')
  } 

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return

    // dispatch( startUploadingFiles(target.files ) );
  }

  return (
    <Grid 
      className="animate__animated animate__fadeIn animate__faster"
      container direction='row' justifyContent="space-between" alignItems='center' sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={ 29 } fontWeight='light'> { dateString }</Typography>  
      </Grid>
      <Grid item>
        <input 
          type='file'
          multiple
          ref={ fileInputRef }
          onChange={ onFileInputChange }
          style={{ display: 'none' }}
        />

        <IconButton
          color='primary'
          disabled={ isSaving }
          onClick={ () => fileInputRef.current.click() }
        >
          <UploadOutlined />
        </IconButton>
        <Button 
          disabled={ isSaving }
          onClick={ onSaveNote }
          color='primary' 
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label='Título'
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={ title }
          onChange={ onInputChange }
        />
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió hoy?"
          label='Título'
          minRows={5}
          name="body"
          value={ body }
          onChange={ onInputChange }
        />
      </Grid>
      
      {/* Image gallery */}
      <ImageGallery />
    </Grid>
  )
}
