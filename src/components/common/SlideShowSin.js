import Carousel from 'react-bootstrap/Carousel';

export function SlideShowSin() {
    return (
        <div className='slideshowsin-contain'>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", margin: "auto" }}>
                        <img src='https://oldsailor.com.vn/vnt_upload/weblink/9f6233f7b36f66313f7e.jpg' />
                    </div>

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", margin: "auto" }}>
                        <img src='https://oldsailor.com.vn/vnt_upload/weblink/9f6233f7b36f66313f7e.jpg' />
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", margin: "auto" }}>
                        <img src='https://oldsailor.com.vn/vnt_upload/weblink/9f6233f7b36f66313f7e.jpg' />
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

