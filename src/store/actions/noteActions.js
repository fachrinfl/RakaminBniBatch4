export const deleteNote = (noteId) => ({
    type: 'DELETE_NOTE',
    payload: noteId,
});