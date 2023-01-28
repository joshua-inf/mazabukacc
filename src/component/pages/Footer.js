import image from '../images/mazlo.png'
export function Footer() {
    return (
        <>
            <div>
                <div className="bg-dark d-flex flex-column">
                    <div className='py-4 px-3'>
                        <div className="row">
                            <div className="col-12 col-md-2 d-flex flex-column justify-content-center">
                                <div className='text-center'>
                                   <img className='' alt='' src={image} width='50%' />
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className='px-3'>
                                    <div className='text-center'>
                                        <h5 className='text-white fw-light' style={{ textTransform: 'uppercase' }}>About</h5>
                                    </div>
                                    <hr className='text-white'/>
                                    <p className='text-white fw-light h6' style={{textAlign:'justify', textJustify:'inter-word'}}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem q
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                            <div className='px-3'>
                                    <div className='text-center'>
                                        <h5 className='text-white fw-light' style={{ textTransform: 'uppercase' }}>contact us</h5>
                                    </div>
                                    <hr className='text-white'/>
                                    <div className='text-white fw-light h6 ' style={{textAlign:'justify', textJustify:'inter-word'}}>
                                        <ul className='contact' style={{listStyle:'none'}}>
                                            <li>
                                                <a  href='#link'><i class="fa-solid mx-3 fa-phone"></i>+26099-999-999</a>
                                            </li>
                                            <li>
                                                <a href='#link'><i class="fa-solid mx-3 fa-envelope"></i>chanichaniuko@mail.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div>
                        <div className='d-flex flex-column text-white h3 p-3 '>
                            <h5 className='fw-light text-uppercase text-center'>socials</h5>
                            <hr className='text-white'/>
                            <div className='d-flex h4 justify-content-center'>
                            <a href='#link' className='mx-3'><i class="fa-brands fa-facebook"></i></a>
                            <a href='#link' className='mx-3'><i class="fa-brands fa-instagram"></i></a>
                            <a href='' className='mx-3'><i class="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}