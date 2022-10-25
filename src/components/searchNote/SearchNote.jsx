import React from 'react';
import { useSelector } from 'react-redux';
import '../displayNotes/displayNote.scss';
import useNoteList from '../../hook/Notes-list';

const SearchNote = () => {
    const searchItem = useSelector((state) => state.notesData.searchItem);
    const searchList = useNoteList(searchItem);
    return (
        <div className='grid-container'>
            {searchList}
        </div>
    )
}
export default SearchNote