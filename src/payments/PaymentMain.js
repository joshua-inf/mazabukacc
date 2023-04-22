import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faNewspaper, faMessage, faSackDollar, faBriefcase, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import image1 from '../component/images/mazlo.png'
import image from '../component/images/bgpay.jpg'
import UsingHooks from './UsingHooks'

import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const Payment = () => {
  


     
    

    const Pay = (props) => {
        return (
            <>
                <div className="p-3">
                    <div className="text-center pay shadow rounded" style={{ position: 'relative' }}>
                        <div style={{}}>
                            <div style={{ fontSize: '60px' }}>
                                {props.icon}
                            </div>
                            <div>
                                <h4>
                                    {props.name}
                                </h4>
                            </div>
                            <div className="p-3">
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
    return (
        <>  <div className="m-2">

            <Link to='/mazabukacc/' className="text-center text-black text-uppercase fw-bold"><img className="mx-3" src={image1} alt='$' width='50px' />mazabuka muniiple council</Link>
        </div>
            <div>
                <div>
                    <div style={{ height: '200px' }}>
                        <div style={{ height: '350px', background: `url(${image}) no-repeat center`, backgroundSize: 'cover', backgroundPositionY: 'center' }}>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="row">
                            <div className="col-sm-1 col-md-2"></div>
                            <div className="col-md-8 col-12">
                                <div className="pb-5 d-flex border-top border-5 border-danger flex-column justify-content-between rounded-4" style={{ backgroundColor: 'white', minHeight: '75vh' }}>
                                    <div className="px-5 pt-4">
                                        <h3 className="text-uppercase ">with E-pay you can pay for</h3>
                                        <p className="my-0 fs-7">below are some of the services that you can pay for using E-payments.</p>
                                    </div>
                                    <hr className="mx-5 mt-0" />
                                    <div className="row">
                                        <div className="col-12 col-md-4 col-sm-6 " style={{ position: 'relative' }}>
                                            <Pay name='Business Levy' icon={<FontAwesomeIcon icon={faBriefcase} />} />
                                        </div>
                                        <div className="col-12 col-md-4 col-sm-6">
                                            <Pay name='Personal Levy' icon={<FontAwesomeIcon icon={faUserTie} />} />
                                        </div>
                                        <div className="col-12 col-md-4 col-sm-6">
                                            <Pay name='Bill Board Management' icon={<FontAwesomeIcon icon={faNewspaper} />} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                        </div>
                                        <div className="col-12 col-md-4 col-sm-6" style={{ position: 'relative' }}>
                                            <Pay name='Ground Rent' icon={<FontAwesomeIcon icon={faSackDollar} />} />
                                        </div>
                                        <div className="col-12 col-md-4 col-sm-6">
                                            <Pay name='Commercial Rent' icon={<FontAwesomeIcon icon={faMessage} />} />
                                        </div>
                                        <div className="">
                                        </div>
                                    </div>
                                    <hr className="mx-5 m-0" />
                                    <div className="text-center mt-5 ">
                                        <h5 className="fs-7 m-0 fw-light"></h5>
                                        <button className="btn border-1 px-5 py-4 btn-lg text-uppercase btn-outline-secondary rounded-0">Make Payment<FontAwesomeIcon icon={faArrowRight} /></button>
                                        <h5 className="fs-7 m-0 fw-light">click above to make payment or click <Link className="text-uppercase">here</Link> to check other option?</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1 col-md-2"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Payment














