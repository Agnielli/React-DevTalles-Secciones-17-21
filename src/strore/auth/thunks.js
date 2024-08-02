import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { chekingCredentials, logout, login } from "./"

export const chekingAuthentication = ( email, password ) => {
  return async(dispatch) => {
    dispatch( chekingCredentials() )
  }
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {

    dispatch( chekingCredentials() );

    const result = await signInWithGoogle();
    if ( !result.ok ) return dispatch( logout(result.errorMessage) );

    dispatch( login(result) )
  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async(dispatch) => {

    dispatch( chekingCredentials() );
    const resp = await registerUserWithEmailPassword({ email, password, displayName });
    console.log(resp);

  }
}