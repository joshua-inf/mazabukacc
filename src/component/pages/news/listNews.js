import { Link, useParams } from "react-router-dom"
import News from "./News";
import parse from 'html-react-parser'
import { useEffect, useState } from "react";
export function ListNews() {
    let { id } = useParams();
    let obj = News.filter((item) => item.newsId == id)
    let SideList = News.filter((item) => item.newsId != id)

    const [html, setHtml] = useState("")
    useEffect(()=>{
        setHtml("<h1>hello</h1>")
    },[html])

  

    return (
        <>
            <div>
                <div>
                    <div className="px-4">
                        <Link className="btn my-2 btn-outline-secondary" to='/mazabukacc/NewsList'>go to news</Link>
                        <div>
                            <div className="row">
                                {obj.map((n) => (
                                    <>
                                        <div className="col-12 col-md-8 ">
                                            <div className="px-3">
                                                <div>
                                                    <div className="text-center" style={{height:'500px'}}>
                                                     <img alt="" src={n.image} style={{maxWidth:'100%', height:'100%'}} />
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <h6 className="fw-light fs-7"><i>{n.auther}</i></h6>
                                                    </div>
                                                    <hr className="my-0 mb-4" />
                                                    <div>
                                                        <h4 className="text-uppercase fw-bold text-center h2">{n.header}</h4>
                                                    </div>
                                                    <div style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                        <p>
                                                            {parse(n.news)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                                <div className="col-4 d-md-block d-none">
                                    <div className="border ">
                                        <div className="bg-light py-3">
                                            <h3 className="text-uppercase fw-light  text-center">more stories</h3>
                                        </div>
                                        <div className="bg-light my-3">
                                            {SideList.map((n) => (
                                                <>
                                                    <div className="row my-2">
                                                        <div className="text-center col-md-12 col-lg-4" style={{height:'100px'}}>
                                                            <img alt="" src={n.image} height='100%' style={{maxWidth:'100%'}}/>
                                                        </div>
                                                        <div className="col-lg-8 col-md-12 px-4">
                                                            <div>
                                                                <h5 className="fw-light">{n.header.substring(0, 20)+'...'}</h5>
                                                                <p className="fs-7">
                                                                   {n.news.substring(0, 150)+'...'}<Link to={'/mazabukacc/NewsList/'+n.newsId}>view</Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}