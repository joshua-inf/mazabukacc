import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHouse, faNewspaper, faShop } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import image from '../component/images/maz.jpg'

const Payment = () => {

    const Pay = (props) => {
        return (
            <>
                <div className="p-3">
                    <div className="text-center pay rounded" style={{position:'relative'}}>
                        <div style={{}}>
                            <div style={{ fontSize: '60px' }}>
                                {props.icon}
                            </div>
                            <div>
                                <h4>
                                    {props.name}
                                </h4>
                            </div>
                            <div>
                                <p>
                                    Titie here Titie here Titie here Titie 
                                </p>
                            </div></div>
                    </div>

                </div>
            </>
        )
    }
    return (
        <>  <div className="m-2">

            <Link to='/mazabukacc' className="text-center"><FontAwesomeIcon icon={faHouse} size="xl"/><br/>home</Link>
        </div>
            <div>
                <div>
                    <div style={{height:'220px'}}>
                        <div style={{height:'350px', background:`url(${image}) no-repeat center`, backgroundSize:'cover'}}>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="pb-5 d-flex flex-column justify-content-between shadow rounded-4" style={{backgroundColor:'white', minHeight:'75vh'}}>
                                    <div className="text-center text-uppercase py-4">
                                        <h3>with E-pay you can pay for</h3>
                                    </div>
                                    <hr className="mx-5 mt-0"/>
                                    <div className="row">
                                        <div className="col-4" style={{position:'relative'}}>
                                            <Pay name='name' icon={<FontAwesomeIcon icon={faShop} />}/>
                                        </div>
                                        <div className="col-4">
                                            <Pay name='name' icon={<FontAwesomeIcon icon={faHouse}/>}/>
                                        </div>
                                        <div className="col-4">
                                            <Pay name='name' icon={<FontAwesomeIcon icon={faNewspaper}/>} />
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-2">
                                        </div>
                                        <div className="col-4" style={{position:'relative'}}>
                                            <Pay name='name' icon={<FontAwesomeIcon icon={faShop} />}/>
                                        </div>
                                        <div className="col-4">
                                            <Pay name='name' icon={<FontAwesomeIcon icon={faHouse}/>}/>
                                        </div>
                                        <div className="col-2">
                                        </div>
                                    </div>

                                    <div className="text-center mt-5 ">
                                        <h5 className="fs-7 m-0 fw-light"></h5>
                                        <button className="btn px-5 py-4 btn-lg text-uppercase btn-outline-secondary rounded-0">Make Payment<FontAwesomeIcon icon={faArrowRight}/></button>
                                        <h5 className="fs-7 m-0 fw-light">click above to make payment or click <Link className="text-uppercase">here</Link> to check other option?</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Payment
