import React from 'react';
import "./style.css";
import Lottie from 'react-lottie';
import AnimationData from '../../assets/lottieloading.json'


function LoadingAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: AnimationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className='loader-container'>
            <Lottie options={defaultOptions}
              height={250}
              width={250}
              isStopped={false}
              isPaused={false}/>
        </div>
    )
}

export default LoadingAnimation
