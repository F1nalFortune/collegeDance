import React from 'react';
import { Slider, Slide } from 'react-materialize';


class Carousel extends React.Component {

  render() {

    return (
      <div>
        <div id="slider" className="row">
          <Slider transition={100} className="slides"
            >
            <Slide
            src="http://i1028.photobucket.com/albums/y348/f1nalfortune/dance_one_zpsvsqgah2e.jpeg"
            >
            </Slide>
            <Slide
            src="http://i1028.photobucket.com/albums/y348/f1nalfortune/dance_2_zpse5ydc7lp.jpg"
            >
            </Slide>
            <Slide
            src="http://i1028.photobucket.com/albums/y348/f1nalfortune/dance_3_zpswhy1ooil.jpg"
            >
            </Slide>
          </Slider>
        </div>
      </div>

    )
  }
}

export default Carousel;



