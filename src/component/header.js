import { useEffect, useState } from 'react';
import image from './images/eaglebg.jpg'
import image1 from './images/mazlo.png'
import { Link , NavLink } from 'react-router-dom';
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

    let lists = document.getElementById('lists')
    let showbtn = document.getElementById('show')
    let hidebt = document.getElementById('hide')

    function hide() {
        lists.style.display = 'none'
        showbtn.style.display = 'block'
        hidebt.style.display = 'none'
    }

    function show() {
        lists.style.display = 'flex'
        hidebt.style.display = 'block'
        showbtn.style.display = 'none'
    }



    return (
        <>
            <div className="px-5 d-flex d-none justify-content-end bg-dark py-2">
                <div className='d-flex justify-content-end'>
                    <a href='#link' className='btn py-1 btn-sm rounded-1 btn-outline-secondary mx-1'><i class="fa-brands fa-facebook"></i></a>
                    <a href='#link' className='btn py-1 btn-sm rounded-1 btn-outline-secondary mx-1'><i class="fa-brands fa-instagram"></i></a>
                    <a href='#link' className='btn py-1 btn-sm rounded-1 btn-outline-secondary mx-1'><i class="fa-brands fa-twitter"></i></a>
                    <div className='input-group'>
                        <input type='text' className='p-0 outline-none+ form-control' />
                        <button className="btn btn-sm btn-warning">search</button>
                    </div>
                </div>
            </div>
            <div className=''>
                <div style={{background:`url(${image}) center/50%`, backgroundSize:'fit', backgroundPositionY:'-700px', backgroundPositionX:'-400px'}} className=" fw-bolder text-white">
                    <div className='d-flex py-4 px-sm-5 flex-column justify-content-between'>
                        <div className=''>
                            <div className='d-sm-flex ' style={{ textAlign: 'center'}}>
                                <img alt='mazcclogo' src={image1} width='100px' />
                                <h5 style={{ lineHeight: '90px' }} className='text-dark px-2 fw-bolder fs-1'>MAZABUKA CITY COUNCIL</h5>
                            </div>
                        </div>
                        <div className="">
                            <div className='d-flex justify-content-sm-end justify-content-center '>
                                <Link to='/mazabukacc/Epay' className="btn  btn-lg fw-bold btn-warning mx-2">Epay</Link>
                                <Link className="btn  btn-lg fw-bold btn-warning ">EService</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navs shadow d-flex justify-content-between">
                <div className=' d-sm-none d-block'>
                    <button id='hide' onClick={hide} style={{ display: 'none' }} className='btn btn-lg btn-outline-secondary '><i class="fa-solid fa-bars"></i></button>
                    <button id='show' onClick={show} className='btn btn-lg btn-outline-secondary '><i class="fa-solid fa-bars"></i></button>
                </div>
                <ul id='lists' className="lists justify-content-sm-evenly">
                    <li><NavLink id='a' to='/mazabukacc/'>home</NavLink></li>
                    <li>
                        <Link id='a' className='link' >
                            services
                            <div style={{ position: 'absolute', left: '0', right: '0', backgroundColor: 'rgba(255,255,255)' }} className='text-white shadow service' >
                                <div className='px-3'>
                                    <div className='row p-3'>
                                        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                            <div className='p-2'>
                                                <h4 className='text-dark d-flex justify-content-center'>Legal Services</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <NavLink id='link' to='/mazabukacc/services/marriages'>Marriages</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='/mazabukacc/services/earlyChildEducation#top'>Early Childhood Education</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Funerals and Cemetaries</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Environment and Health</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                            <div className='p-2'>
                                                <h4 className='text-dark d-flex justify-content-center'>More Services</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>City Libraries</NavLink>
                                                        <div className='underline'></div>

                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Hire NavLink venue</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Traditional Healer/ Herbalist</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Waste Management</NavLink>
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
                            <div style={{ position: 'absolute', left: '0', right: '0', backgroundColor: 'rgba(255,255,255)' }} className='text-white shadow service' >
                                <div className='px-3'>
                                    <div className='row p-3'>
                                        <div className='col-12 col-sm-6 col-md-4  col-lg-3'>
                                            <div className='p-2'>
                                                <h4 className='text-dark d-flex justify-content-center'>Departments</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Housing and Social Services</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Public Health</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Valuation and Real Estate</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-4  col-lg-3'>
                                            <div className='p-2'>
                                                <h4 className='text-dark d-flex justify-content-center'>More Departments</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Administration</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Finance</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Legal Services</NavLink>
                                                        <div className='underline'></div>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Engineering</NavLink>
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
                            <div style={{ position: 'absolute', left: '0', right: '0', backgroundColor: 'rgba(255,255,255)' }} className='text-white shadow service' >
                                <div className='px-3'>
                                    <div className='row p-3'>
                                        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                            <div className='p-2'>
                                                <h4 className='text-dark d-flex justify-content-center'>Projects</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>CDF use in Mazabuka local</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Inner Ring Road project</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                            <div className='p-2'>
                                                <h4 className='text-dark d-flex justify-content-center'>More Projects</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Roads and Drainages</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Street Lighting Projects</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink id='link' to='mazabukacc/services/link'>Valuation</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
                {hidebtn && (
                    <div id='btn' className='py-3 d-sm-block'>
                        <Link to='/mazabukacc/epay' className='btn mx-1 btn-sm btn-outline-warning'>Epay</Link>
                        <button className='btn mx-1 btn-sm btn-outline-warning'>Eservice</button>
                    </div>
                )}

            </div>
            {hidebtn && (
                <button onClick={scrollup} className='btn rounded-0 btn-lg bg-warning shadow' style={{
                    position: 'fixed',
                    bottom: '30px',
                    zIndex:'3',
                    right: '30px',
                }}><i class="fa-solid fa-arrow-up"></i></button>
            )}
        </>
    )
}