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
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      // todo mensaje error
    },
    updateNote: (state, action) => {

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