import { Link } from 'react-router-dom'
import image1 from '../../images/mazban.jpg'
import Eventslist from '../Events/Eventslist'
export function Events() {


    const Event = (props) => {
        return (
            <>
            <Link to={'Events/'+props.id}>
                <div className="event my-2 border-secondary rounded">
                    <div className=''>
                        <div>
                            <h5>{props.head}</h5>
                        </div>
                        <div>
                            <p style={{ fontSize: '10px' }}>
                               {props.txt}
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
                            {Eventslist.map((n)=>(
                                <>
                                    <Event id={n.eventId} head={n.eventhead} txt={n.eventetxt.substring(0, 120)+'...'} />
                                </>
                            ))}
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