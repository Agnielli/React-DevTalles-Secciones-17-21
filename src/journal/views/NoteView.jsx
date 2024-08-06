import { useDispatch } from 'react-redux'
import { useEffect, useMemo } from "react"
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from '../components'
import { useForm } from "../../hooks"
import { useSelector } from "react-redux"
import { setActiveNote, startSavingNote } from '../../store'

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector( state => state.journal )  // useSelector es un hook de Redux que permite acceder al estado global de la aplicación. En este caso, se accede al estado de la nota activa (active) del journal.
  
  const { body, title, date, onInputChange, formState } = useForm( note )

  const dateString = useMemo( () => {
    const newDate = new Date( date )
    return newDate.toUTCString()
  }, [date])

  useEffect( () => {
    dispatch( setActiveNote(formState) )
  }, [formState])

  const onSaveNote = () => {
    dispatch( startSavingNote() )
    console.log('Guardando')
  } 

  return (
    <Grid 
      className="animate__animated animate__fadeIn animate__faster"
      container direction='row' justifyContent="space-between" alignItems='center' sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={ 29 } fontWeight='light'> { dateString }</Typography>  
      </Grid>
      <Grid item>
        <Button 
          color='primary' 
          sx={{ padding: 2 }}
          onClick={ onSaveNote }
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
