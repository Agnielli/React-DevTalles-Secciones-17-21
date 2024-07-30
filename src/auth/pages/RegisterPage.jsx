import { Link as RouterLink } from "react-router-dom"
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayaut } from "../layout/AuthLayaut"

export const RegisterPage = () => {
  return (
    <AuthLayaut title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Nombre completo" 
              type="text" 
              placeholder="Tu nombre"
              fullWidth 
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Email" 
              type="email" 
              placeholder="Tu email"
              fullWidth 
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="Enter your password"
              fullWidth 
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 }>
              <Button variant="contained" fullWidth>
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