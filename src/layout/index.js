import { useNavigate } from "react-router-dom"
import Breadcrumb from "./breadcrumb"

const Layout = (props) => {

    const { children } = props

    const navigate = useNavigate()

    return (
        <div className="shadow drawer h-screen mb-20">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content p-0 m-0">

                <div className="bg-neutral mb-10">
                    <div className="navbar mb-2 text-neutral-content container mx-auto">

                        <div>
                            <label for="my-drawer" className="btn btn-square btn-ghost drawer-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 ">
                            <span className="text-lg font-bold">
                                Chordz
                            </span>
                        </div>
                        {/* 
                        <div className="flex-none">
                            <button className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-none">
                            <button className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-none">
                            <div className="avatar">
                                <div className="rounded-full w-10 h-10 m-1">
                                    <img src="https://i.pravatar.cc/500?img=32" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>


                <div className="container mx-auto px-3">

                    <div className="mb-10">
                        <Breadcrumb />
                    </div>

                    {children}

                </div>
            </div>

            <div className="drawer-side">
                <label for="my-drawer" className="drawer-overlay"></label>

                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li>
                        <div className="flex-none hidden lg:flex mb-5">
                            <label for="my-drawer" className="btn btn-square btn-ghost drawer-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                    </li>
                    <li>
                        <a onClick={() => navigate('/')}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => navigate('/chords')}>Chord library</a>
                    </li>
                    <li>
                        <a onClick={() => navigate('/saved')}>Saved</a>
                    </li>
                    <li>
                        <a onClick={() => navigate('/scales')}>Scales</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Layout