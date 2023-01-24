import image from './images/water.jpg'
export function Nav() {
    
    return (
        <>
        <div className="px-5 d-flex justify-content-end bg-dark py-2">
            <div className='d-flex justify-content-end'>
                <button className="btn py-1 btn-sm rounded-1 btn-outline-secondary mx-1">yo</button>
                <button className="btn py-1 btn-sm rounded-1 btn-outline-secondary mx-1">yo</button>
                <div className='input-group'>
                    <input type='text' className='p-0 outline-none+ form-control'/>
                    <button className="btn btn-sm btn-warning">search</button>
                </div>
            </div>
        </div>
        <div style={{background:`url(${image}) no-repeat center`, backgroundSize:'cover', backgroundPositionY:'10%'}}>
            <div style={{backgroundColor:'rgba(0,0,0,.6)', height:'300px'}} className="p-5 fw-bolder text-white d-flex justify-content-between">
                <h3  className=''>MAZABUKA CITY COUNCIL</h3>
                <div className="">
                    <button className="btn btn-lg btn-warning mx-2">Epay</button>
                    <button className="btn btn-lg btn-warning mx-2">EService</button>
                </div>
            </div>
        </div>
        <div className=" navs">
            <ul className="">
                <li><a href="#v">home</a></li>
                <li><a href="#v">about us</a></li>
                <li><a href="#v">contact us</a></li>
                <li><a href="#v">services</a></li>
                <li><a href="#v">something soon</a></li>
            </ul>
        </div>
        </>
    )
}