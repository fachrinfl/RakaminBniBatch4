export const deleteNote = (noteId) => ({
    type: 'DELETE_NOTE',
    payload: noteId,
});

export const addNote = (note) => ({
    type: 'ADD_NOTES',
    payload: note,
});

export const editNote = (note) => ({
    type: 'EDIT_NOTE',
    payload: note,
});