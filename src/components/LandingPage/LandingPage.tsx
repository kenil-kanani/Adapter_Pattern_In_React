import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const [username, setUsername] = useState('')
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <h1 className='text-2xl'>Hello Bro</h1>
            <input
                type="text"
                className=" ml-[40px] rounded-md w-[600px] text-[#848D97] bg-[#0D1117] input_find"
                placeholder="Your GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Link
                to={`/user/${username}`}
            >
                <button className="ml-2 bg-[#2EA043] text-white px-4 py-2 rounded-md">
                    Search
                </button>
            </Link>
        </div>
    )
}

export default LandingPage