import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import './style.css';

function Index({
    repo
}) {
  return (
    <div className='repo-cont'>

        <div>
            <p className='repo-title'>
                api-design-with-djangorest
                <span className='repo-type'>
                    Public
                </span>
            </p>

            <p className='repo-desc'>
                Api design with django framework
            </p>

            <div className='d-flex flex-row justify-content-between align-items-center'>
               <p>
                    <span className='repo-color'>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </span>

                    <span className='repo-lang'>
                        Python
                    </span>
               </p>

               <p className='d-flex flex-row justify-content-center align-items-center'>
                   <span className='repo-star me-1'>
                    <i className="bi bi-star"></i>
                   </span>

                   <span className='repo-lang'>
                   1
                   </span>
               </p>

               <p className='repo-update'>
                   Updated 5 days ago
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