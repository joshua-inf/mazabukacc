import { Link } from 'react-router-dom';
import News from './News.js'
export function NewsList() {



    const NewsListCont = (props) => {
        return (
            <>
                <div className="col-12 col-sm-6 col-md-4 py-2">
                    <div className="card">
                        <div style={{height:'200px'}} className='text-center'>
                            <img alt="" src={props.image} style={{maxWidth:'100%', height:'100%'}} className="" />
                        </div>
                        <div className='d-flex px-2 justify-content-end'>
                            <h6 className='fw-lighter'>28 january, 2023</h6>
                        </div>
                        <div className='card-body'>
                            <h6 className='card-title text-uppercase'>{props.head}</h6>
                            <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                {props.news}<Link to={'/NewsList/' + props.Id} >View more</Link>
                            </p>
                        </div>
                        <div className='d-flex px-2 justify-content-end'>
                            <h6 className='fw-lighter'>{props.auther}</h6>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className='px-4'>
                <div className='pb-4'>
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
                                            {News.map((n)=>(
                                                <>
                                                    {<NewsListCont key={n.newsId} Id={n.newsId} image={n.image} head={n.header} news={n.news.substring(0, 100) + '...'} auther={n.auther}/>}
                                                </>
                                            ))}
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