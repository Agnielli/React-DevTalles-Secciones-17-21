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
      
      state.messageSaved = `${ action.payload.title } - Actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter( note => note.id !== action.payload )
    },
    // deleteImgById: (state, action) => {
    //   state.active = null;
    //   state.active.imagesUrls = state.active.imagesUrls.filter( img => img.id !== action.payload )
    // }
  }
});
export const { 
              addNewEmptyNote, 
              clearNotesLogout,
              deleteImgById,
              deleteNoteById,
              savingNewNote, 
              setActiveNote, 
              setNotes, 
              setPhotosToActiveNote,
              setSaving, 
              updateNote, } = journalSlice.actions;