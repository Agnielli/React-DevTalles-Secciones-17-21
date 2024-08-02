import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayaut } from "../layout/AuthLayaut"
import { useForm } from "../../hooks"
import { chekingAuthentication, startGoogleSignIn } from "../../strore/auth"

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth )

  const dispatch = useDispatch();
  const { displayName, email, password, onInputChange } = useForm({
    email: 'quique@gmail.com',
    password: '123456',
  })

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( chekingAuthentication(email, password) )
  }

  const onGoogleSignIn = () => {
    console.log('Google');
    dispatch( startGoogleSignIn() )
  }

  return (
    <AuthLayaut title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder="Enter your email"
              fullWidth 
              name="email"
              value={ email }
              onChange={ onInputChange }
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
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                disabled={ isAuthenticating }
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                disabled={ isAuthenticating }
                variant="contained" 
                fullWidth
                onClick={ onGoogleSignIn }
              >
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayaut>
  )
}
