import React from 'react';

import './style.css';

function Index({
    currentPage
}) {
  return (
    <div className='navbar-cont'>
        <ul className='navbar-collection'>
            <li>
                <div className='nav-list-cont'>
                    <i className="bi bi-book"></i>

                    <span>
                        Overview
                    </span>
                </div>
            </li>

            <li
                className='active'
                // style={{
                //     borderBottomWidth: currentPage === 'repository' ?
                //     1 : 0,
                //     borderBottomColor: currentPage === 'repository' ? 
                //     'orange' : 'red', 
                // }}
            >
                <div className='nav-list-cont'>
                    <i className="bi bi-display"></i>

                    <span>
                        Repositories
                    </span>

                    <span className='aux-cont'>397</span>
                </div>
            </li>

            <li>
                <div className='nav-list-cont'>
                    <i className="bi bi-kanban"></i>

                    <span>
                        Projects
                    </span>
                </div>
            </li>

            <li>
                <div className='nav-list-cont'>
                    <i className="bi bi-box"></i>

                    <span>
                        Packages
                    </span>
                </div>
            </li>

            <li>
                <div className='nav-list-cont'>
                    <i className="bi bi-star"></i>

                    <span>
                        Stars
                    </span>

                    <span className='aux-cont'>190</span>
                </div>
            </li>
        </ul>
    </div>
  );
};

export default Index;