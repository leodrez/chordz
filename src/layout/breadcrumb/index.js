import { useLocation, useNavigate, useParams } from "react-router-dom"

const Breadcrumb = () => {

    const navigate = useNavigate()
    const params = useParams()
    const location = useLocation()

    return (
        <div class="text-sm breadcrumbs">
            <ul>
                <li>
                    <a onClick={() => navigate('/')}>
                        Home
                    </a>
                </li>

                {
                    location?.pathname && location?.pathname.includes('chords') &&
                    <li>
                        <a onClick={() => navigate('/chords')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Chord Library

                        </a>
                    </li>
                }

                {
                    params?.chordId &&
                    <li>
                        <a className="link link-primary link-hover">
                            {params?.chordId}
                        </a>
                    </li>
                }
{
                    location?.pathname && location?.pathname.includes('suffixes') &&
                    <li>
                        <a onClick={() => navigate('/suffixes')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Suffixes

                        </a>
                    </li>
                }



                {/* <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Add Chord

                </li> */}
            </ul>
        </div>
    )

}
export default Breadcrumb