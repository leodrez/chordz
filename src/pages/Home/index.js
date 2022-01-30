
import Chord from '@tombatossals/react-chords/lib/Chord'
import chords from '../../data/guitar/index'
import { useEffect, useState } from 'react';

const Home = () => {

    const [data] = useState(chords)

    const [keys] = useState(Object.values(data?.keys))
    const [suffixes] = useState(Object.values(data?.suffixes))

    console.log('Dataset: ', data)

    const instrument = {
        strings: 6,
        fretsOnChord: 4,
        name: 'Guitar',
        keys: [],
        tunings: {
            standard: ['E', 'A', 'D', 'G', 'B', 'E']
        }
    }

    // Chord list
    const C = {
        frets: [-1, 3, 2, 0, 1, 0],
        fingers: [0, 4, 3, 1, 1],
        capo: false,
        name: 'C Major'
    }

    const D = {
        frets: [-1, -1, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 2, 3],
        capo: false,
        name: 'D Major'
    }

    const chordGroup = [
        C,
        D,
    ]

    return (
        <div>


            <div className='flex m-20'>
                <span>Keys</span>
                {
                    keys && keys.length > 0 && keys.map((chord, i) => (
                        <div className='m-5'>
                            <button className='btn btn-neutral'>
                                <span>{chord}</span>
                            </button>
                        </div>

                    ))
                }
            </div>

            <div className='grid gap-4 grid-cols-12'>
                <span>All suffixes</span>
                {
                    suffixes && suffixes.length > 0 && suffixes.map((suffix, i) => (
                        <div className='m-5'>
                            <button className='btn btn-neutral'>
                                <span>{suffix}</span>
                            </button>
                        </div>

                    ))
                }
            </div>

            <div className='bg-white'>
                {
                    chordGroup && chordGroup.length > 0 && chordGroup.map((c, i) => (
                        <div className='p-20'>
                            <div>
                                <span>{c?.name}</span>
                            </div>
                            <div className='w-80'>
                                <Chord
                                    chord={c}
                                    instrument={instrument}
                                />
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Home