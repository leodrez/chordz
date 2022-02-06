import Chord from "@tombatossals/react-chords/lib/Chord"
import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import Layout from "../../../layout"
import allChordsBySuffix from "../../../lib/allChordsBySuffix"
import dataSource from '../../../lib/guitar.json'
import useGuitar from "../../../lib/useInstrument"

const Suffix = () => {

    const [data, setData] = useState(null)
    const [selected, setSelected] = useState(null)

    const params = useParams()
    const suffix = params?.suffix

    const instrument = useGuitar()

    useEffect(() => {

        getChordsBySuffix()
    }, [suffix])

    const getChordsBySuffix = async () => {

        const chords = suffix && await allChordsBySuffix(suffix)

        const flatArray = chords.map((c, i) => c[0])

        setData(flatArray)
    }

    console.log("DATA: ", data, 'selected: ', selected)

    return (
        <Layout>
            <div>

                <div className="mb-8">
                    <span className="text-xl">All chords in suffix:</span>
                    <br />
                    <span className="text-7xl capitalize"> {suffix} </span>
                </div>

                <div className="grid grid-cols-12 gap-4 mb-8">
                    {
                        data && data?.length > 0 &&
                        data.map((c, i) => (
                            <button
                                onClick={() => setSelected(c)}
                                className={`btn btn-neutral ${selected?.key === c?.key ? 'bg-primary' : null}`}
                                >
                                <span className="capitalize">{c.key}</span>
                            </button>
                        )
                        )
                    }
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


            </div>
        </Layout>

    )
}

export default Suffix