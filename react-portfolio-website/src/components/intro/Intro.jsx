import { useEffect, useRef } from 'react';
import './Intro.scss';
import { init } from 'ityped';

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"], 
    });
  },[]);

  return (
    <div className="intro flex" id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" className="image-man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="pre-title">hello there, i am</h2>
          <h1 className="title">malika bano</h1>
          <h3 className="sub-title">
            freelance <span ref={textRef} className="dynamic-text"></span>
          </h3>
        </div>
        <a className="down-image" href="#portfolio">
          <img src="assets/down.png" className="arrow-down" />
        </a>
      </div>
    </div>
  )
}

export default Intro;
