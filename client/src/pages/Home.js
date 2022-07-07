import React from 'react'
import Navbar from '../components/Navbar'
import ToyCard from '../components/ToyCard'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Home() {

    const [toys, setToys] = useState(null)

    const fetchToys = async () => {
        const res = await fetch('http://localhost:5000/fetch')
        const data = await res.json()
        setToys(data)
    }

    useEffect(() => {
        fetchToys()
    }, [])

    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content center">
                <Link to="/add" className='btn btn-primary mt-3 mx-auto'>Add Toy</Link>

            </div>

            <div className="container mt-5">
                <div className="row">
                    {toys && toys.map((toy, index) => {
                        return <div className="col-4">
                            <ToyCard toy={toy} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
