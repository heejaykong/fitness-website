import React from 'react';
import Media from 'react-bootstrap/Media'
import BG_IMAGES from '../assets/images/bg/index.js';
// 어바웃은 텍스트/사진 위주가 될 것

function About() {
  return (
    <>
      <div>about</div>
      {BG_IMAGES.map(img => {
        console.log(img)
        return (
          <Media>
            <img
              // width={100}
              // height={64}
              className="mr-3 photo"
              src={img}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Media Heading</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        );
      })}
    </>
  );
}

export default About;
