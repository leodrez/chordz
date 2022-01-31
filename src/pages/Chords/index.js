
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/index'

import dataSource from '../../lib/guitar.json'

const Chords = () => {

    const [data] = useState(dataSource)
    const [keys] = useState(dataSource?.keys)

    const navigate = useNavigate()


    const navigateToKey = (key) => {

        let parsedKey = key;

        switch (parsedKey) {
            case 'C#':
                parsedKey = 'Csharp' 
                break;
            case 'F#':
                parsedKey = 'Fsharp' 
                break;
        }

        return navigate(parsedKey)
    }

    return (
        <Layout>

            <div className="mb-4">
                <span>
                    Select key
                </span>
            </div>

            <div>
                <div className="grid grid-cols-4 gap-4">
                    {
                        keys && keys?.length > 0 && keys.map((key, i) => (
                            <div
                                onClick={() => navigateToKey(key)}
                                className="card shadow-lg text-primary hover:bg-gray-500 hover:text-white">
                                <div className="card-body flex items-center content-center">
                                    <span className='text-9xl font-black' key={i}>{key}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </Layout>

    )
}

export default Chords