import React from 'react'
import { useState } from 'react'

export default function ToyCard(props) {

    const [edit, setEdit] = useState(false)
    const [toy, setToy] = useState(props.toy)

    const handleEdit = () => {
        setEdit(true)
    }

    const handleSave = () => {
        document.getElementById("editForm").submit()
        setEdit(false)
    }

    const handleDelete = async () => {

        const data = toy._id
        fetch('http://localhost:5000/edit/delete', {
            method: 'POST',
            redirect: "follow",
            // mode: 'cors',
            headers: {
                // "Accept": "application/json",
                "Content-Type": "text/plain"
            },

            body: JSON.stringify(data)
        })
        setEdit(false)
        window.location.href = "http://localhost:3000/home"
    }

    const handleCancel = () => {
        setEdit(false)
    }

    return (
        <div>

            {!edit && <div class="card mb-5" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h3 class="card-title">{toy.Name}</h3>
                    <p class="card-text">{toy.Information}</p>
                </div>
                <div className='d-flex justify-content-between p-3'>
                    <div onClick={handleEdit} className="btn btn-primary">Edit</div>
                    <div onClick={handleDelete} className="btn btn-danger">Delete</div>
                </div>
            </div>}

            {edit && <form id="editForm" action='http://localhost:5000/edit' method='post' class="card mb-5" style={{ width: "18rem" }}>
                <div class="card-body">
                    <input name="id" type="hidden" value={toy._id} />
                    <input name='newName' defaultValue={toy.Name} type="text" class="card-title" />
                    <input name='newInfo' defaultValue={toy.Information} class="card-text" />
                </div>
                <div className='d-flex justify-content-around p-3'>
                    <button type="submit" className="btn btn-success">Save</button>
                    <button onClick={handleCancel} className="btn btn-danger">Cancel</button>
                </div>
            </form>}

        </div>
    )
}
