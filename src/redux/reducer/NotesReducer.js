import * as actions from '../action-type';

const initalState = {
    items: [],
    isUserEditNote: false,
    searchItem: []
}
export const NoteReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.ADD_NOTES:
            return {
                ...state,
                items: state.items.concat(action.notes)

            }

        case actions.EDIT_NOTES:
            return {
                ...state,
                isUserEditNote: true
            }

        case actions.UPDATE_NOTE:
            const findIndex = state.items.findIndex((items) => items.id === action.updateNote.id);
            const copyItmes = [...state.items];
            copyItmes[findIndex] = action.updateNote
            localStorage.clear();
            return {
                ...state,
                items: copyItmes,
                isUserEditNote: false
            }

        case actions.CANCEL_UPDATE_VALUE:
            return {
                ...state,
                isUserEditNote: false
            }

        case actions.SEARCH_NOTE:
            const searchNote = state.items.filter((item) => {
                let searchItem = {}
                const noteid = "note" + item.id;
                const title = item.title.split(' ').join('').toLowerCase();
                const list = item.list.split(' ').join('').toLowerCase()
                if (noteid === action.searchNote ||
                    title === action.searchNote ||
                    list === action.searchNote
                ) {
                    searchItem = item
                }
                return searchItem
            });

            const copySearchNote = [...searchNote];
            return {
                ...state,
                searchItem: copySearchNote
            }
        case actions.CANCEL_ITEMS_VALUE:
            return {
                ...state,
                items: {}
            }
        case actions.REMOVE_NOTES:
            const filterNote = state.items.filter((items) => items.id !== action.id);
            return {
                ...state,
                items: filterNote
            }

        default:
            return state
    }
}