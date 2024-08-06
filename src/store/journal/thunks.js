import  { doc, setDoc, collection } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from './journalSlice';
import { loadNotes } from '../../helpers';


export const startNewNote = () => {
    return async ( dispatch, getState ) => {

      // tarea dispatch
      dispatch( savingNewNote() )

      const { uid } = getState().auth;
      
      const newNote = {
        body: '',
        date: new Date().getTime(),
        title: '',
      }
      const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
      await setDoc( newDoc, newNote );

      newNote.id = newDoc.id;

      dispatch( addNewEmptyNote( newNote ) )
      dispatch( setActiveNote( newNote ) )

    }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    
    const { uid } = getState().auth;
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const notes = await loadNotes( uid );
    dispatch( setNotes(notes) )
  }
}

export const startSavingNote = () => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
    await setDoc( docRef, noteToFireStore, { merge: true } )
  }
}
