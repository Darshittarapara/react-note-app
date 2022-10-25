import *  as actions from '../action-type';

export const addNotesAction = (notes) => {
  
    return {
        type: actions.ADD_NOTES,
        notes
    }
};
export function removeItemsAction() {
    return {
        type: actions.CANCEL_ITEMS_VALUE
    }
}

export const editNotesAction = (id) => {
    return {
        type: actions.EDIT_NOTES,
        id
    }
}
export const updateNoteAction = (updateNote) => {
    return {
        type: actions.UPDATE_NOTE,
        updateNote
    }
}

export const cancelUpdateNote = () => {
    return {
        type: actions.CANCEL_UPDATE_VALUE
    }
}

export const searchNoteAction = (searchNote) => {
   
    return {
        type: actions.SEARCH_NOTE,
        searchNote
    }
}
export const deleteNotesAction = (id) => {
    return {
        type: actions.REMOVE_NOTES,
        id
    }
};

