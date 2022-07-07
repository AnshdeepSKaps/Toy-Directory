import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import ToyCard from '../components/ToyCard'

export default function Search() {

    const [results, setResults] = useState(null)

    const handleGo = () => {

        const search = document.getElementById("search").value

        fetch("http://localhost:5000/fetch/search", {
            method: 'POST',
            // mode: 'cors',
            headers: {
                // "Accept": "application/json",
                "Content-Type": "text/plain"
            },

            body: search
        })
            .then(res => res.json())
            .then(data => {
                setResults(data)
                console.log(data)
            })
    }

    return (
        <div>
            <Navbar />
            <h1 className='mt-4 text-center'>Search Toys</h1>
            <div className='ms-3'>
                <h3>Search:</h3>
                <input id="search" type="text" />
                <div onClick={handleGo} className=" ms-3 btn btn-primary">Go</div>
            </div>

            <div className="container mt-5">

                <div className="row">
                    {results && results.map(toy => {
                        return <div className="col">
                            <ToyCard toy={toy} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
