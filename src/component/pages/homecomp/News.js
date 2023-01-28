import image from '../../images/riots.jpeg'
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <>
            <div className="px-3">
                <div>
                    <div className="row bg-light my-3">
                        <div className="col-sm-3 p-0">
                            <img alt='' src={image} width='100%'/>
                        </div>
                        <div className='col-sm-9'>
                            <div className=''>
                                <h2 className='text-secondary'>News header</h2>
                                <p style={{fontSize:'15px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
                                a aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                                </p>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-sm btn-outline-secondary'>view more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-light my-3">
                        <div className="col-sm-3 p-0">
                            <img alt='' src={image} width='100%'/>
                        </div>
                        <div className='col-sm-9'>
                            <div className=''>
                                <h2 className='text-secondary'>News header</h2>
                                <p style={{fontSize:'15px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
                                a aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                                </p>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-sm btn-outline-secondary'>view more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-light my-3">
                        <div className="col-sm-3 p-0">
                            <img alt='' src={image} width='100%'/>
                        </div>
                        <div className='col-sm-9'>
                            <div className=''>
                                <h2 className='text-secondary'>News header</h2>
                                <p style={{fontSize:'15px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
                                a aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                                </p>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-sm btn-outline-secondary'>view more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <Link to='/mazabukacc/NewsList' className=' text-uppercase'>view more</Link>
                </div>
                    <hr className='my-2'/>
            </div>
        </>
    )
}

export default News