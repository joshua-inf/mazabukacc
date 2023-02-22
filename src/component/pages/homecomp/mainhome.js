import Carousel from 'react-bootstrap/Carousel';
import image from '../../images/Mayor1.jpg'
import image1 from '../../images/project1.jpg'
import image2 from '../../images/maz2.jpg'
export function Mainhome() {
    return (
        <>
            <div>
                <div>
                    <div className=''>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}