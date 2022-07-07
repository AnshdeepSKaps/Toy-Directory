import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home" class="navbar-brand">Toy Directory</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <Link className='ms-3 text-white' to="/home">Home</Link>
            <Link className='ms-3 text-white' to="/login">Login</Link>
            <Link to="/" className='text-white ms-3'>Register</Link>
            <Link to="/search" className='text-white ms-3'>Search Toy</Link>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">

            </div>
        </nav>
    )
}
