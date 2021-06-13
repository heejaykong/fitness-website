import React from 'react';
import BG_IMAGES from '../assets/images/bg/index.js';

const image = new Image();
image.src = BG_IMAGES[3];
image.className = "bg-image";
image.alt = "woman lifting weight";
console.log(image)

{/* <img src={ BG_IMAGES[3] } className="bg-image" alt="woman lifting weight"/> */}
function Main() {
  return (
    <>
      {/* {document.querySelector("body").appendChild(image)} */}
      <h1>세이프짐에서 당신은 당신에게 집중할 수 있습니다. 안전하고 자유롭게 운동하세요.</h1>
      <h5>IN A SAFE GYM, YOU CAN CONCENTRATE ON YOU.</h5>
      <h5>EXERCISE SAFELY AND FREELY.</h5>
    </>
  );
}

export default Main;
