import React, {useContext, useState} from "react"
import noteContext from "../context/notes/noteContext"

const NoteItem = (props) => {
	const context = useContext(noteContext)
	const {deleteNote, editNote} = context
	const {note, updateNote} = props

	return (
		<>
			<div className='col-md-3 my-3'>
				<div className='card'>
					<div className='card-body'>
						<input type='hidden' readOnly value={note._id}></input>
						<h5 className='card-title'>{note.title}</h5>
						<p className='card-text'>{note.description}</p>
						<div className='d-flex justify-content-between'>
							<div>
								<i
									className='fa-solid fa-trash mx-2'
									onClick={() => deleteNote(note._id)}
								></i>
								<i
									className='fa-solid fa-pen-to-square mx-2'
									onClick={() => updateNote(note)}
								></i>
							</div>
							<small className='text-muted'>
								{note.tag !== "" ? "tag: " + note.tag : ""}
							</small>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NoteItem
