import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchNoteAction } from '../../redux/action/NoteAction';
import Button from '../Button/Button';
import './Searchlist.scss';

const SearchInput = () => {
    const userSearchNote = useRef('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchNoteHandler = () => {
        const removeSpaceBetWeenWord = userSearchNote.current.value.split(' ').join('').toLowerCase();
        userSearchNote.current.value =''
        dispatch(searchNoteAction(removeSpaceBetWeenWord));
        navigate('/search');
    }
    return (
        <div className='search'>
            <input
                type='text'
                ref={userSearchNote}
                defaultValue={userSearchNote.current.value}
                placeholder='Search title' />
            <Button type="button" onClick={searchNoteHandler}>Search</Button>
        </div>
    )
};
export default SearchInput;