import { Link, useParams } from "react-router-dom"
import image from '../../images/cutting.jpg'

export function ListNews(){
    let {id} = useParams();

    return (
        <>
            <div>
                <div>
                    <div className="px-4">
                        <Link className="btn btn-outline-secondary" to='/mazabukacc/NewsList'>back</Link>
                        <hr/>
                        <div>
                            <div className="row">
                                <div className="col-12 col-md-8 ">
                                    <div className="px-3">
                                        <div>
                                            <img alt="" src={image}  width='100%'/>
                                            <div className="d-flex justify-content-end">
                                                <h6 className="fw-light fs-7"><i>~E&S photography</i></h6>
                                            </div>
                                            <hr className="my-0 mb-4"/>
                                            <div>
                                                <h4 className="text-uppercase fw-light text-center h2">heading for the story</h4>
                                            </div>
                                            <div style={{textAlign:'justify', textJustify:'inter-word'}}>
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa
                                                ntium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab i
                                                llo inventore veritatis et quasi architecto beatae vitae dicta sunt e
                                                xplicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                                                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione vol
                                                uptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum qui
                                                a dolor sit amet, consectetur, adipisci velit, sed quia non numquam eiu
                                                s modi tempora incidunt ut labore et dolore magnam aliquam quaerat volup
                                                tatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corpo
                                                ris suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                                                 autem vel eum iure reprehenderit qui in ea voluptate velit esse quam ni
                                                 hil molestiae consequatur
                                                , vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 d-md-block d-none">
                                    <div className="border ">
                                        <div className="bg-light py-3">
                                            <h3 className="text-uppercase fw-light  text-center">more stories</h3>
                                        </div>
                                        <div className="bg-light my-3">
                                            <div className="row ">
                                                <div className="col-md-12 col-lg-4">
                                                    <img alt="" src={image} width='100%'/>
                                                </div>
                                                <div className="col-lg-8 col-md-12 px-4">
                                                    <div>
                                                        <h5 className="fw-light">some heading</h5>
                                                        <p className="fs-7">
                                                        i ut aliquid ex ea commodi consequatur? Quis
                                                        autem vel eum iure reprehen...<Link to='/mazabukacc/NewsList/4'>view</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                            </div><div className="row ">
                                                <div className="col-md-12 col-lg-4">
                                                    <img alt="" src={image} width='100%'/>
                                                </div>
                                                <div className="col-lg-8 col-md-12 px-4">
                                                    <div>
                                                        <h5 className="fw-light">some heading</h5>
                                                        <p className="fs-7">
                                                        i ut aliquid ex ea commodi consequatur? Quis
                                                        autem vel eum iure reprehen...<Link to='/mazabukacc/NewsList/4'>view</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                            </div>
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