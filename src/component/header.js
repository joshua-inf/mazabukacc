import { useEffect, useState } from 'react';
import image from './images/water.jpg'
import image1 from './images/mazlo.png'
import { Link } from 'react-router-dom';
export function Nav() {

    const [hidebtn, setHidebtn] = useState();


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                setHidebtn(true)
            } else {
                setHidebtn(false)
            }
        })
    }, [])

    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    let serv = document.getElementById('service');

    window.addEventListener('click', function (e) {
        if (!serv.contains(e.target)) {
            // Clicked in box
            serv.style.display = 'none';
        } else {
            // Clicked outside the box
        }
    });


    function hide() {
        serv.style.display = 'block'
        console.log('hello')
    }



    return (
        <>
            <div className="px-5 d-flex justify-content-end bg-dark py-2">
                <div className='d-flex justify-content-end'>
                    <button className="btn py-1 btn-sm rounded-1 btn-outline-secondary mx-1">yo</button>
                    <button className="btn py-1 btn-sm rounded-1 btn-outline-secondary mx-1">yo</button>
                    <div className='input-group'>
                        <input type='text' className='p-0 outline-none+ form-control' />
                        <button className="btn btn-sm btn-warning">search</button>
                    </div>
                </div>
            </div>
            <div className='' style={{ background: `url(${image}) no-repeat center`, backgroundSize: 'cover', backgroundPositionY: '60%' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.2)', height: '300px' }} className=" fw-bolder text-white p-5">
                    <div className='row'>
                        <div className='col-12 py-3 d-flex' >
                            <img alt='mazcclogo' src={image1} height='150px' />
                            <h1 style={{lineHeight:'150px'}} className='mx-3 text-light fw-bolder'>MAZABUKA CITY COUNCIL</h1>
                        </div>

                        <div className="col-12 ">
                            <div className='d-flex justify-content-end '>
                                <button className="btn  btn-lg fw-bold btn-warning mx-2">Epay</button>
                                <button className="btn  btn-lg fw-bold btn-warning mx-2">EService</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navs shadow d-flex justify-content-between">
                <ul className="d-none d-sm-flex">
                    <li><Link id='a' to='mazabukacc/'>home</Link></li>
                    <li>
                        <Link id='a' className='link' >
                            services
                            <div style={{ position: 'absolute', top: '60px', left: '0', right: '0', backgroundColor: 'rgba(255,255,255)' }} className='text-white shadow service' >
                                <div className='px-3'>
                                    <div className='row p-3'>
                                        <div className='col-3'>
                                            <div className='p-4'>
                                                <h4 className='text-dark d-flex justify-content-center'>Legal Services</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <Link id='link' to='mazabukacc/services/marriages'>Marriages</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Early Childhood Education</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Funerals and Cemetaries</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Environment and Health</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className='p-4'>
                                                <h4 className='text-dark d-flex justify-content-center'>More Services</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <Link id='link' to='#link'>City Libraries</Link>
                                                        <div className='underline'></div>

                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Hire Link venue</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Traditional Healer/ Herbalist</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Waste Management</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link></li>
                    <li>
                        <Link id='a' className='link'>
                            departments
                            <div style={{ position: 'absolute', top: '60px', left: '0', right: '0', backgroundColor: 'rgba(255,255,255)' }} className='text-white shadow service' >
                                <div className='px-3'>
                                    <div className='row p-3'>
                                        <div className='col-3'>
                                            <div className='p-4'>
                                                <h4 className='text-dark d-flex justify-content-center'>Departments</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <Link id='link' to='#link'>Housing and Social Services</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Public Health</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Valuation and Real Estate</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className='p-4'>
                                                <h4 className='text-dark d-flex justify-content-center'>More Departments</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <Link id='link' to='#link'>Administration</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Finance</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Legal Services</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Engineering</Link>
                                                        <div className='underline'></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link id='a' className='link' >
                            projects
                            <div style={{ position: 'absolute', top: '60px', left: '0', right: '0', backgroundColor: 'rgba(255,255,255)' }} className='text-white shadow service' >
                                <div className='px-3'>
                                    <div className='row p-3'>
                                        <div className='col-3'>
                                            <div className='p-4'>
                                                <h4 className='text-dark d-flex justify-content-center'>Projects</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <Link id='link' to='#link'>CDF use in Mazabuka local</Link>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Inner Ring Road project</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className='p-4'>
                                                <h4 className='text-dark d-flex justify-content-center'>More Projects</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <Link id='link' to='#link'>Roads and Drainages</Link>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Street Lighting Projects</Link>
                                                    </li>
                                                    <li>
                                                        <Link id='link' to='#link'>Valuation</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li><Link id='a'>something soon</Link></li>
                </ul>
                {hidebtn && (
                    <div id='btn' className='p-2 px-5'>
                        <button className='btn mx-1 btn-sm btn-outline-warning'>Epay</button>
                        <button className='btn mx-1 btn-sm btn-outline-warning'>Eservice</button>
                    </div>
                )}

            </div>
            {hidebtn && (
                <button onClick={scrollup} className='btn rounded-0 btn-lg bg-warning shadow' style={{
                    position:'fixed',
                    bottom:'30px',
                    right:'30px',
                }}>top</button>
            )}
        </>
    )
}