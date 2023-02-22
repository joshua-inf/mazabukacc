import { Link } from 'react-router-dom'
import image1 from '../../images/mazban.jpg'
export function Events() {

    const Event = () => {
        return (
            <>
            <Link>
                <div className="event my-2 border-secondary rounded">
                    <div className=''>
                        <div>
                            <h5>some event</h5>
                        </div>
                        <div>
                            <p style={{ fontSize: '10px' }}>
                                SOME DATE HERE SOME DATE HERE SOME DATE HERE SOME DATE HERE SOME DATE HERE SOME DATE HERE
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            </>
        )
    }


    return (
        <>
            <div>
                <div>
                    <div className="">
                        <div className="w-100 bg-secondary">
                            <h4 className="text-white d-flex justify-content-center" style={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>Events</h4>
                        </div>
                        <div className=''>
                            <Event />
                            <Event />
                            <Event />
                        </div>

                    </div>
                    <div className='py-5 px-3'>
                        <div style={{ position: 'sticky' }}>
                            <img alt='' src={image1} width='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}