import image from '../../images/picture.jpg'
export function Events(){
    return (
        <>
            <div>
                <div>
                    <div className="border border-secondary">
                        <div className="w-100 bg-secondary">
                            <h4 className="text-white d-flex justify-content-center" style={{textTransform:'uppercase', fontWeight:'bolder'}}>Events</h4>
                        </div>
                        <div className="px-3">
                            <div className="row my-2 border-bottom border-secondary">
                                <div className="col-4 p-0">
                                    <img alt='' src={image} width='100%'/>
                                </div>
                                <div className='col-8'>
                                    <h5>some event</h5>
                                    <p style={{fontSize:'10px'}}>
                                        SOME DATE HERE
                                    </p>
                                </div>
                            </div>
                            <div className="row my-2 border-bottom border-secondary">
                                <div className="col-4 p-0">
                                    <img alt='' src={image} width='100%'/>
                                </div>
                                <div className='col-8'>
                                    <h5>some event</h5>
                                    <p style={{fontSize:'10px'}}>
                                        SOME DATE HERE
                                    </p>
                                </div>
                            </div>
                            <div className="row my-2 border-bottom border-secondary">
                                <div className="col-4 p-0">
                                    <img alt='' src={image} width='100%'/>
                                </div>
                                <div className='col-8'>
                                    <h5>some event</h5>
                                    <p style={{fontSize:'10px'}}>
                                        SOME DATE HERE
                                    </p>
                                </div>
                            </div>
                            <div className="row my-2 border-bottom border-secondary">
                                <div className="col-4 p-0">
                                    <img alt='' src={image} width='100%'/>
                                </div>
                                <div className='col-8'>
                                    <h5>some event</h5>
                                    <p style={{fontSize:'10px'}}>
                                        SOME DATE HERE
                                    </p>
                                </div>
                            </div>
                            <div className='p-1'>
                                <button className='btn w-100 btn-sm btn-outline-secondary'>check them all out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}