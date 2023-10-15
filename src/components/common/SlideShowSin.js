import Carousel from 'react-bootstrap/Carousel';

export function SlideShowSin() {
    return (
        <div className='slideshowsin-contain'>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img src='https://oldsailor.com.vn/vnt_upload/weblink/9f6233f7b36f66313f7e.jpg' />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src='https://oldsailor.com.vn/vnt_upload/weblink/9f6233f7b36f66313f7e.jpg' />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://oldsailor.com.vn/vnt_upload/weblink/9f6233f7b36f66313f7e.jpg' />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

