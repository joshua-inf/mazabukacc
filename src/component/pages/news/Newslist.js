import { Link } from 'react-router-dom';
import image from '../../images/cutting.jpg'
import image1 from '../../images/poster.jpg'
export function NewsList() {

    let words = ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo nventore veritatis et quasi architecto beatae vitae dicta sunt explica bo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit a ut fugit, sed quia consequuntur magni dolores eos qui ratione voluptate m sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaer'
    let result = words.substring(0, 100) + '...';
    return (
        <>
            <div>
                <div className='py-5'>
                    <div>
                        <h3 className='text-uppercase display-3 text-center'>news titles</h3>
                    </div>
                    <hr className='mx-5' />
                    <div className='px-4'>
                        <div className=''>
                            <div className=''>
                                <div className="row">
                                    <div className='col-1 d-none d-sm-block'></div>
                                    <div className="col-12 col-xl-10 col-sm-10">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                                <div className="card">
                                                    <img alt="" src={image} className="card-img-top" />
                                                    <div className='d-flex px-2 justify-content-end'>
                                                        <h6 className='fw-lighter'>28 january, 2023</h6>
                                                    </div>
                                                    <div className='card-body'>
                                                        <h6 className='card-title text-uppercase'>some heading about news here</h6>
                                                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                            {result}<Link to='/mazabukacc/NewsList/2' >View more</Link>
                                                        </p>
                                                    </div>
                                                    <div className='d-flex px-2 justify-content-end'>
                                                        <h6 className='fw-lighter'>anonymouse reporter</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                                <div className="card">
                                                    <img alt="" src={image} className="card-img-top" />
                                                    <div className='d-flex px-2 justify-content-end'>
                                                        <h6 className='fw-lighter'>28 january, 2023</h6>
                                                    </div>
                                                    <div className='card-body'>
                                                        <h6 className='card-title text-uppercase'>some heading about news here</h6>
                                                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                            {result}<Link to='/mazabukacc/NewsList/3' >View more</Link>
                                                        </p>
                                                    </div>
                                                    <div className='d-flex px-2 justify-content-end'>
                                                        <h6 className='fw-lighter'>anonymouse reporter</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" col-12 col-sm-6 col-md-4 py-2">
                                                <div className="card">
                                                    <img alt="" src={image} className="card-img-top" />
                                                    <div className='d-flex px-2 justify-content-end'>
                                                        <h6 className='fw-lighter'>28 january, 2023</h6>
                                                    </div>
                                                    <div className='card-body'>
                                                        <h6 className='card-title text-uppercase'>some heading about news here</h6>
                                                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                            {result}<Link to='/mazabukacc/NewsList/1' >View more</Link>
                                                        </p>
                                                    </div>
                                                    <div className='d-flex px-2 justify-content-end'>
                                                        <h6 className='fw-lighter'>anonymouse reporter</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}