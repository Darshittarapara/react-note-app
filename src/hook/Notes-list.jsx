import React, { Fragment, useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import { useDispatch } from 'react-redux';
import '../components/displayNotes/displayNote.scss'
import { useNavigate } from 'react-router-dom';
import { deleteNotesAction, editNotesAction } from '../redux/action/NoteAction';
import Swal from 'sweetalert2';


const useNoteList = (items) => {
    const [isNoteDataGetFind, getisNoteDataFind] = useState(true);

    const dispatch = useDispatch();
    const navigator = useNavigate();
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (items.length === 0) {
                getisNoteDataFind(false);
            }
        }, 2000);
        return () => { clearTimeout(timeout) }
    }, [items, navigator]);

    const EditNoteHandler = (event) => {
        const id = parseInt(event.target.id);
        const findEditItems = items.find((items) => items.id === id);
        if (findEditItems) {
            localStorage.setItem('editValue', JSON.stringify(findEditItems));
        }
        else {
            alert('Not Found');
        }
        navigator('/');
        dispatch(editNotesAction(parseFloat(event.target.id)));
    }

    const DeleteNoteHandler = (event) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
           
                dispatch(deleteNotesAction(parseInt(event.target.id)));
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    };
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "86vw",
        height: '90vh',
        overFlow: 'hidden',
        color: 'white'
    }

    const notDataNoteFoundHandler = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'your list is empty',

        }).then(() => {
            navigator('/');
        })

    }
    return (
        <Fragment>
            {items.length > 0 ? items.map((items, index) => {

                return (
                    <div className='display-items' style={{ width: "18rem", height: "auto" }} key={`note ${index}`}>
                        <div className="card-body">
                            <h5 className="card-title">Note {items.id}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{items.title}</h6>
                            <p className="card-text">{items.list}</p>
                            <div style={{ display: 'flex' }}>
                                <Button type="button" classes="card-link" id={items.id} onClick={EditNoteHandler}>Edit</Button>
                                <Button type="button" classes="card-link" id={items.id} onClick={DeleteNoteHandler}>Delete</Button>
                            </div>
                        </div>
                    </div>
                )
            }) : <div style={style}><h2>Loading...</h2></div>}
            {!isNoteDataGetFind && notDataNoteFoundHandler()}
        </Fragment>
    )
}
export default useNoteList;