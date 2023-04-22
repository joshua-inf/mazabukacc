import { Link } from 'react-router-dom'
import News from '../news/News'

const Newss = () => {
    function Value (props) {
        let obj = News.filter((n) => n.newsId == props.value )
        return (
            <>
            {obj.map((n)=>(
                <Newscon image={n.image} header={n.header} link={n.newsId}  news={n.news.substring(0,100)+'...'}/>
            ))}
            </>
        )

    }

    const Newscon = (props) => {
        return (
            <>
                <div className="bg-light col-12 col-sm-6 col-md-4 py-4">
                    <div className='news '>
                        <Link className='text-black' to={'/mazabukacc/NewsList/'+props.link}>
                            <div className="text-center" style={{height:'200px'}}>
                                <img alt='' src={props.image} style={{maxWidth:'100%', height:'100%'}} />
                            </div>
                            <div className=''>
                                <div className='px-2 pb-2'>
                                    <h2 className='text-black fw-bolder h6'>{props.header}</h2>
                                    <p className='' style={{ fontSize: '16px' }}>
                                        {props.news}
                                    </p>
                                </div>
                            </div>
                        </Link>
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
                       <Value  value={News.length}/>
                       <Value  value={2}/>
                       <Value  value={News.length-2}/>
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

export default Newss