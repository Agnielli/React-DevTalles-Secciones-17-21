  import { createSlice } from '@reduxjs/toolkit';

  export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    // active: {
    //   id: 'abc123',
    //   title: '',
    //   body: '',
    //   date: 1234567,
    //   imagesUrls: [], // https://foto1.jpg, https:foto2.jpg, etc
    // }
  },
  reducers: { //tienen que ser funciones puras, síncronas!!
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action ) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';

    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map( note => (note.id === action.payload.id)
        ? action.payload
        : note)
      //   {
      //   if (note.id === action.payload.id) {
      //     return action.payload;
      //   }
      //   return note;
      // }
      
      state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
    },
    deleteNoteById: (state, action) => {

    },
  }
});
export const { 
              addNewEmptyNote, 
              deleteNoteById,
              savingNewNote, 
              setActiveNote, 
              setNotes, 
              setSaving, 
              updateNote, } = journalSlice.actions;