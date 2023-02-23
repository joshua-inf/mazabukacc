import parse from 'html-react-parser'
import { Link,NavLink, useParams } from "react-router-dom"
import Eventslist from "./Eventslist"
const Events = () => {
    let { id } = useParams();
    let obj = Eventslist.filter((n) => n.eventId != id)
    let filteredListEvent = Eventslist.filter((n) => n.eventId == id)

    return (
        <>
            <div>
                <div>
                    <div className="p-3">
                        <div className="row">
                            <div className="col-4">
                                <div>
                                    <div >
                                        {obj.map((n) => (
                                            <>
                                                <div className="Events" key={n.eventId}>
                                                    <Link className='text-black' to={'/Events/' + n.eventId}>
                                                        <div className="d-flex ">
                                                            <div className="d-flex flex-column text-center">
                                                                <div>23</div>
                                                                <div>february</div>
                                                                <div> 2023</div>
                                                            </div>
                                                            <div className="px-3">
                                                                <div><h5>{n.eventhead}</h5></div>
                                                                <div><p>{n.eventetxt.substring(0, 100) + '...'}</p></div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                </div>
                                            </>
                                        ))}

                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div>
                                    {filteredListEvent.map((n) => (
                                        <>
                                            <div className="text-center" style={{ height: '400px' }}>
                                                <img src={n.image} style={{maxWidth:'100%', height:'100%'}} alt="image" />
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <h6 className="fw-light"><i>image by E&S PHOTOGRAPHY</i></h6>
                                                <h6 className="fw-light"><i>auther</i></h6>
                                            </div>
                                            <div>
                                                <h4>{n.eventhead}</h4>
                                            </div>
                                            <div>
                                                <p className="p-3">
                                                   {parse(n.eventetxt)}
                                                </p>
                                            </div>
                                        </>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events