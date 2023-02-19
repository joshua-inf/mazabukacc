import image from '../../images/riots.jpeg'
import { Link } from 'react-router-dom'

const News = () => {
    const Newscon = () => {
        return (
            <>
                <div className="bg-light col-6 col-sm-6 col-md-4 py-4">
                    <div className='news '>
                        <div className="" style={{}}>
                            <img alt='' src={image} width='100%' />
                        </div>
                        <div className=''>
                            <div className='px-2 pb-2'>
                                <h2 className='text-secondary'>News header</h2>
                                <p style={{ fontSize: '10px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
                                    a aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="">
                <div>
                    <div className='row'>
                        <Newscon/>
                        <Newscon/>
                        <Newscon/>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <Link to='/mazabukacc/NewsList' className=' text-uppercase'>view more</Link>
                </div>
                <hr className='my-2' />
            </div>
        </>
    )
}

export default News