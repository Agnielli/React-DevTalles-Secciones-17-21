import { Link as RouterLink } from "react-router-dom"
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import { AuthLayaut } from "../layout/AuthLayaut"
import { useForm } from "../../hooks"

export const RegisterPage = () => {

  const formData = {
      email: 'quique@gmail.com',
      password: '123456',
      displayName: 'Eliana'
  }

  const formValidations = {
    email: [(value) => value.includes('@'), 'Por favor ingrese un correo válido'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
  }

  const { 
    displayName, email, password, onInputChange, formState, 
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations );


  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( formState );
  }

  return (
    <AuthLayaut title="Register">
      <h1>formValid: { isFormValid ? 'Válido' : 'No Válido'}</h1>
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Nombre completo" 
              type="text" 
              placeholder="Tu nombre"
              fullWidth 
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid }
              helperText={ displayNameValid }
              
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Email" 
              type="email" 
              placeholder="Tu email"
              fullWidth 
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid }
              helperText={ emailValid }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="Enter your password"
              fullWidth 
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid }
              helperText={ passwordValid }
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 }>
              <Button 
                type = "submit"
                variant = "contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayaut>
  )
}
