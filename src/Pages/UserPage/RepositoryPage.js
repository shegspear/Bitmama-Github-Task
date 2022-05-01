import React, {useState, useEffect} from 'react';

import './style.css';
import HeaderComp from '../../Components/Header/Index';
import ProfileComp from '../../Components/Profile/Index';
import SearchComp from '../../Components/Search/Index';
import RepositoryComp from '../../Components/Repository/Index';

//testing db
import testDB from '../../TestingDB/Index';

function RepositoryPage() {
  const[repoDB, setRepoDB] = useState([]);

  function filterRepo(value) {
    let repoArr = [];

    testDB.forEach(repo => {
      if(repo.title.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
        repoArr.push(repo)
      }
    });

    setRepoDB(repoArr);
  };

  useEffect(() => {
    setRepoDB(testDB);
  }, []);

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
            <SearchComp filterRepo={filterRepo} />
          </div>

          {
            repoDB.map(repo => <RepositoryComp key={repo.id} repo={repo} />)
          }

        </div>

      </div>

    </div>
  );
};

export default RepositoryPage;