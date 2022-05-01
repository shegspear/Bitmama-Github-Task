import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import './style.css';

function Index({
    repo
}) {
  return (
    <div key={repo.id} className='repo-cont'>

        <div className='sub-cont-1'>
            <p className='repo-title'>
                {repo.title}
                <span className='repo-type'>
                    Public
                </span>
            </p>

            <p className='repo-desc'>
               {repo.description}
            </p>

            <div className='sub-cont-1-child-3'>
               <p>
                    <span
                        style={{
                            color:  repo.language === 'Python' ?
                            'blue' : 'yellow'
                        }} 
                        className='repo-color'
                    >
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </span>

                    <span className='repo-lang'>
                        {repo.language}
                    </span>
               </p>

               <p className='d-flex flex-row justify-content-center align-items-center'>
                   <span 
                    className='repo-star me-1'
                   >
                    <i className="bi bi-star"></i>
                   </span>

                   <span className='repo-lang'>
                   {repo.starRating}
                   </span>
               </p>

               <p className='repo-update'>
                   Updated {repo.timeStamp} days ago
               </p>
            </div>
        </div>

        <div>
        
            <div className='d-flex flex-row justify-content-center align-items-center'>
                <button className='star-btn'>
                    <i className="bi bi-star me-1"></i>
                    Star  
                </button>
                <DropdownButton
                    variant="outline-secondary"
                    title=''
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">1 Star</Dropdown.Item>
                    <Dropdown.Item href="#">2 Star</Dropdown.Item>
                    <Dropdown.Item href="#">3 Star</Dropdown.Item>
                </DropdownButton>
            </div>
                
        
        </div>

    </div>
  )
};

export default Index;