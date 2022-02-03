import Chord from '@tombatossals/react-chords/lib/Chord';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import Layout from '../../layout/index'

import dataSource from '../../lib/guitar.json'
import useGuitar from '../../lib/useInstrument';

const ChordById = () => {

    const [data, setData] = useState(null)
    const [selected, setSelected] = useState(null)

    const params = useParams()
    const chordId = params?.chordId

    useEffect(() => {
        dataSource && dataSource?.chords && chordId &&
            setData(dataSource?.chords[chordId])
    }, [])


    const renderChord = (suffix) => {

        const filteredChord = data.filter(d => d.suffix === suffix)
        setSelected(filteredChord[0])

    }

    const instrument = useGuitar()

    return (
        <Layout>

            <div className='mb-10 rounded-lg'>
                <div className='mb-8' style={{ marginBottom: -70 }}>
                    <span
                        className='font-extrabold'
                        style={{ fontSize: 200, lineHeight: 1 }}> {chordId} </span>
                </div>

                <div className='grid grid-cols-3 lg:grid-cols-10 gap-6 bg-gray-100 p-10 pt-20' >
                    {
                        data && data?.length > 0 && data?.map((chord, i) => (
                            <a
                                onClick={() => renderChord(chord?.suffix)}
                                href="#detail"
                                key={i} className='link link-primary link-hover font-bold capitalize text-lg lg:text-xl'>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span> {chord?.suffix} </span>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>


            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10' id="detail">
                {
                    selected && selected?.positions && selected?.positions?.length > 0 &&
                    selected?.positions?.map((p, i) => (
                        <div>

                            <span>Position: {i + 1}</span>

                            <Chord
                                chord={{
                                    frets: p?.frets,
                                    fingers: p?.fingers,
                                    capo: p?.capo,
                                    name: `Position: ${i + 1}`
                                }}
                                instrument={instrument}
                            />
                        </div>
                    ))
                }
            </div>

        </Layout>

    )
}

export default ChordById