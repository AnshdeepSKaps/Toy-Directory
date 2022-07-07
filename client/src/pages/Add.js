import React from 'react'
import Navbar from '../components/Navbar'

export default function Add() {
    return (
        <div>
            <Navbar />
            <h2 className='text-center mt-3'>Enter Details Of New Toy</h2>

            <form action='http://localhost:5000/add' method="post" id="form" className='w-25 mx-auto mt-5'>
                <div className="row w-50 mx-auto mb-3">
                    <div className='text-center'>Toy Name</div>
                    <input type="text" name="name" />
                </div>

                <div className="row w-50 mx-auto">
                    <div className='text-center'>Toy Information</div>
                    <textarea name="information" form="form"></textarea>
                </div>

                <div className="row w-50 mx-auto">
                    <button type="submit" style={{ cursor: "pointer", height: "4vh" }} className='mt-3 text-center text-white bg-success'>Save</button>
                </div>
            </form>
        </div>
    )
}
