import { combineReducers, createStore } from "redux";
import { NoteReducer } from "./reducer/NotesReducer";

const rootReducer = combineReducers({
    notesData: NoteReducer
})
const store = createStore(rootReducer )
export default store