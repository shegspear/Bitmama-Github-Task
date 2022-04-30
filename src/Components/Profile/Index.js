import React from 'react';

import './style.css'

function Index() {
  return (
    <div className='profile'>

       <div className='image-cont'>
            <img 
                src='assets/avatar/elon-musk.jpg'
                alt='avatar'
                className='profile-picture'
            />
            <p className='camera-icon'>
                <i className="fa fa-camera" aria-hidden="true"></i>
            </p>
       </div>

       <div className='profile-body'>

            <p className='user-name'>
                Ezokafor
            </p>

            <p className='name'>
                Ezokafor GoodnessEzeokafor
            </p>

            <button
                className='follow-btn'
            >
                Follow
            </button>

            <p className='desc'>
                try to be better than yesterday
            </p>

            <div className='follow-cont'>
                <p> 
                    <span>
                     <i className="bi bi-people"></i> 
                    </span>
                    <span className='follow-num'>
                        105
                    </span>
                    <span className='follow-text'>
                        followers
                    </span>
                </p>
                
                <p className='mx-3'>
                -
                </p>

                <p>
                    <span className='follow-num-2'>
                        192
                    </span>
                    <span className='follow-text'>
                        following
                    </span>
                </p>
            </div>

            <p className='social'>
                <span className='me-3'>
                    <i className="bi bi-geo-alt"></i>
                </span>
                
                <span>
                Jos
                </span>
            </p>

            <p className='social'>
                <span className='me-3'>
                 <i className="bi bi-envelope"></i>
                </span>
                
                <span>
                    gootech442@gmail.com
                </span>
            </p>

            <p className='social'>
                <span className='me-3'>
                    <i className="bi bi-twitter"></i>
                </span>
                
                <span>
                    @GoodyEzeokafor
                </span>
            </p>

            <div className='achieve-cont'>

                <p className='achieve-label'>
                    Achievements
                </p>

                <img 
                    src='assets/placeholder/javascript-logo.png'
                    alt='achievement badge'
                    style={{height: 80, width: 80}}
                />
            </div>

       </div>

    </div>
  );
};

export default Index;