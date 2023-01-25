import image from './images/water.jpg'
export function Nav() {

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
            <div className='' style={{ background: `url(${image}) no-repeat center`, backgroundSize: 'cover', backgroundPositionY: '10%' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.6)', height: '300px' }} className=" fw-bolder text-white p-5">
                    <div className='row'>
                        <div className='col-12 py-5'>
                            <h1 className='d-flex fw-bolder justify-content-center'>MAZABUKA CITY COUNCIL</h1>
                        </div>

                        <div className="col-12 pt-4">
                            <div className='d-flex justify-content-end '>
                                <button className="btn  btn-lg fw-bold btn-warning mx-2">Epay</button>
                                <button className="btn  btn-lg fw-bold btn-warning mx-2">EService</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navs shadow">
                <ul className="d-none d-sm-flex">
                    <li><a id='a' href="#v">home</a></li>
                    <li>
                        <a id='a' className='link' href="#v">
                            services
                            <div style={{ position: 'absolute', top: '60px', left: '0', right: '0', backgroundColor: 'rgba(255,255,255,.8)' }} className='text-white shadow service' >
                                <div>
                                    <div className='row p-3'>
                                        <div className='col-3'>
                                            <div className='p-4'>
                                                <h4 className='text-dark d-flex justify-content-center'>Legal Services</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <a id='link' href=''>Marriages</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Early Childhood Education</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Funerals and Cemetaries</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Environment and Health</a>
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
                                                        <a id='link' href=''>City Libraries</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Hire a venue</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Traditional Healer/ Herbalist</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Waste Management</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a></li>
                    <li>
                        <a id='a' className='link' href="#v">
                            departments
                            <div style={{ position: 'absolute', top: '60px', left: '0', right: '0', backgroundColor: 'rgba(255,255,255,.8)' }} className='text-white shadow service' >
                                <div>
                                    <div className='row p-3'>
                                        <div className='col-3'>
                                            <div className='p-4'>
                                                <h4 className='text-dark d-flex justify-content-center'>Departments</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <a id='link' href=''>Housing and Social Services</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Public Health</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Valuation and Real Estate</a>
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
                                                        <a id='link' href=''>Administration</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Finance</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Legal Services</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Engineering</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </a>
                    </li>
                    <li>
                        <a id='a' className='link' href="#v">
                            projects
                            <div style={{ position: 'absolute', top: '60px', left: '0', right: '0', backgroundColor: 'rgba(255,255,255,.8)' }} className='text-white shadow service' >
                                <div>
                                    <div className='row p-3'>
                                        <div className='col-3'>
                                            <div className='p-4'>
                                                <h4 className='text-dark d-flex justify-content-center'>Projects</h4>
                                                <hr className='text-dark' />
                                                <ul>
                                                    <li>
                                                        <a id='link' href=''>CDF use in Mazabuka local</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Inner Ring Road project</a>
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
                                                        <a id='link' href=''>Roads and Drainages</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Street Lighting Projects</a>
                                                    </li>
                                                    <li>
                                                        <a id='link' href=''>Valuation</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li><a id='a' href="#v">something soon</a></li>
                </ul>

            </div>
        </>
    )
}