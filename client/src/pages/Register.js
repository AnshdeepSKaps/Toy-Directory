import React from 'react'
import Navbar from '../components/Navbar'

export default function Register() {
    return (
        <div>
            <Navbar />
            <h1 className='mt-4 text-center'>Register</h1>
            <form action="http://localhost:5000/register" method="post" className='ms-5'>
                <div>
                    <h2>ID:</h2>
                    <input name='id' type="text" />
                </div>

                <div className="mt-3">
                    <h2>Password:</h2>
                    <input name='password' type="password" />
                </div>

                <div className='mt-3'>
                    <h2>Confirm:</h2>
                    <input type="password" name='confirm' />
                </div>

                <div className="mt-3">
                    <button type='submit'>Register</button>
                </div>
            </form >
        </div >
    )
}
