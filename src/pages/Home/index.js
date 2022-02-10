
import Chord from '@tombatossals/react-chords/lib/Chord'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout';
import lib from '../../lib/guitar.json'

const Home = () => {

    const [data] = useState(lib)

    let navigate = useNavigate();

    console.log('DATA: ', data)

    return (
        <Layout>

            <button
                onClick={() => navigate('/chords')}
                className='btn'>Chord library</button>

            <button
                onClick={() => navigate('/suffixes')}
                className='btn'>Chords By Suffixes</button>
            {/* <button
                    disabled
                    onClick={() => navigate('/saved')}
                    className='btn'>Saved</button>
                <button
                    disabled
                    onClick={() => navigate('/scales')}
                    className='btn'>Scales</button> */}


        </Layout>
    )
}

export default Home