import React, {useState, useEffect} from 'react';

import './style.css';
import HeaderComp from '../../Components/Header/Index';
import ProfileComp from '../../Components/Profile/Index';
import SearchComp from '../../Components/Search/Index';
import RepositoryComp from '../../Components/Repository/Index';

//testing db
import testDB from '../../TestingDB/Index';
import { Modal } from 'react-bootstrap';

function RepositoryPage() {
  const[repoDB, setRepoDB] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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
    setModalShow(true); 
  }, []);

  return (
    <div className='page'>

      {/* hidden guide modal */}
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h4>Feature Alert</h4>
            <p>
              Please use the search bar to filter 
              through the twenty available repository results. <br />
              Also access your browsers Devtools to visualize the Redux Toolkit. 
            </p>
          </Modal.Body>
        </Modal>
       {/* hidden guide modal */}

     <div className='desktop-header'>
      <HeaderComp currentPage={'repository'} />
     </div>

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