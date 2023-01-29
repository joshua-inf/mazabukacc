import image from '../images/wasting_time.gif'

export function Build(){
    return(
        <>
            <div className='px-3'>
                <div className='row mt-5'>
                    <div className='col-3'>

                    </div>
                    <div className='col-6'>
                        <div className=''>
                            <div>
                                <h3 className='display-6 text-center text-uppercase'>page is under construction</h3>
                                <hr/>
                                <p className='fw-light h4'>something big is coming...</p>
                            </div>
                        <img alt='' src={image} width='100%'/>
                        </div>
                    </div>
                    <div className='col-3'>

                    </div>
                </div>
            </div>
        </>
    )
}