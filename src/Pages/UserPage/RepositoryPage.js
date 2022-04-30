import React from 'react';

import './style.css';
import HeaderComp from '../../Components/Header/Index';
import ProfileComp from '../../Components/Profile/Index';
import SearchComp from '../../Components/Search/Index';
import RepositoryComp from '../../Components/Repository/Index';

function RepositoryPage() {
  return (
    <div className='page'>

      <HeaderComp currentPage={'repository'} />

      <div className='page-body'>

        <div className='profile-cont'>
          <ProfileComp />
        </div>

        <div className='page-body-cont'>

          <div className='mobile-header'>
            <HeaderComp currentPage={'repository'} />
          </div>

          <div className='my-3'>
            <SearchComp />
          </div>

          <RepositoryComp />

        </div>

      </div>

    </div>
  );
};

export default RepositoryPage;