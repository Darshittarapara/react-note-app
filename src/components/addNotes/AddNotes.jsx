import React, { useEffect } from 'react';
import './Noteform.scss';
import Button from '../Button/Button';
import Card from '../UI/Card';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNotesAction, cancelUpdateNote, updateNoteAction } from '../../redux/action/NoteAction';
import Swal from 'sweetalert2';

let noteId = 1;
const AddNotes = () => {

    const [isUserStartWriteNote, getIsUserStartWriteNote] = useState(false);
    const [userInputTitle, getuserInputTitle] = useState('');
    const [userInputList, getuserInputList] = useState('');
    const isUserEditNote = useSelector((state) => state.notesData.isUserEditNote);
    const dispatch = useDispatch();

    useEffect(() => {
        const editOldValue = JSON.parse(localStorage.getItem('editValue'));
        if (editOldValue) {
            getuserInputTitle(editOldValue.title);
            getuserInputList(editOldValue.list);
        }
    }, [])

    const listhandlerChange = (event) => {
        if (event.target.value) {
            getIsUserStartWriteNote(true);
        }
        getuserInputList(event.target.value)
    };

    const titleChangeHandler = (event) => {
        getuserInputTitle(event.target.value)
    }
    const addNotesHandler = () => {
        const noteData = {
            id: noteId++,
            title: userInputTitle.charAt(0).toLocaleUpperCase() + userInputTitle.slice(1),
            list: userInputList.charAt(0).toLocaleUpperCase() + userInputList.slice(1)
        };

        dispatch(addNotesAction(noteData));
        getuserInputList(''); getuserInputTitle('');
        getIsUserStartWriteNote(false);
        Swal.fire("Your note is successfully add!")

    }

    const updateNoteHandler = () => {
        const oldValue = JSON.parse(localStorage.getItem('editValue'))
        const updateNoteData = {
            id: oldValue.id,
            title: userInputTitle,
            list: userInputList
        }
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success');
                dispatch(updateNoteAction(updateNoteData));
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
                dispatch(cancelUpdateNote());
                localStorage.clear();
            }
        })
        getuserInputList(''); getuserInputTitle('');
    }
    return (
        <Card>
            <div className="mb-6">
                <h2>Add Notes</h2>
                <div style={{ margin: '10px 0px' }}>
                    <input
                        type='text'
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Title"
                        onChange={titleChangeHandler}
                        value={userInputTitle}
                    />
                </div>
                <div>
                    <textarea
                        cols={10}
                        rows={3}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Write Notes"
                        onChange={listhandlerChange}
                        style={{ resize: "none" }}
                        value={userInputList}
                    />
                </div>
                <div style={{ marginTop: "7px" }} >
                    {!isUserEditNote ?
                        <Button type="button" disabled={!isUserStartWriteNote} onClick={addNotesHandler}>Add Note</Button> :
                        <Button type="button" onClick={updateNoteHandler}>Update</Button>
                    }

                </div>
            </div>
        </Card>
    )
};

export default AddNotes;




