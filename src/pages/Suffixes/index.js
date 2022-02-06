import { useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import Layout from "../../layout"

import dataSource from '../../lib/guitar.json'

const Suffixes = () => {

    const [data] = useState(dataSource)

    const navigate = useNavigate()

    return (
        <Layout>
            <div>

                <div className="mb-4">
                    <span className="text-4xl">Suffixes</span>
                </div>


                <div className="grid grid-cols-8 gap-4">

                    {
                        data?.suffixes && data?.suffixes?.length > 0 &&
                        data.suffixes.map((s, i) => (
                            <div key={i}>
                                <a
                                    className="link link-secondary"
                                    onClick={() => navigate(`/suffixes/${s}`)}>{s} </a>
                            </div>
                        ))
                    }
                </div>


            </div>
        </Layout>

    )
}

export default Suffixes