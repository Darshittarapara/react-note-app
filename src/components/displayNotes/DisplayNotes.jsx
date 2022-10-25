import React from 'react';
import './displayNote.scss';
import {  useSelector } from 'react-redux';
import useNoteList from '../../hook/Notes-list';


const DisplayNotes = () => {

    const notedata = useSelector((state) => state.notesData.items);
    const noteList = useNoteList(notedata)
    //this is custome hook where we return any things we want
    return (
        <>
            <div className='grid-container'>{noteList}</div>
        </>
    )
}
export default DisplayNotes;