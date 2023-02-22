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
                                {props.news}<Link to={'/mazabukacc/NewsList/' + props.Id} >View more</Link>
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
    let words = ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo nventore veritatis et quasi architecto beatae vitae dicta sunt explica bo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit a ut fugit, sed quia consequuntur magni dolores eos qui ratione voluptate m sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaer'
    let result = words.substring(0, 100) + '...';
    return (
        <>
            <div className='px-4'>
                <Link className="btn mt-2 btn-outline-secondary" to='/mazabukacc/'>back</Link>
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