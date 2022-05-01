import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import {
  login
} from '../../Actions/useraction';

import './style.css';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height: 200}}>
          <p className='font-bold h4 mb-3'>
            {props.msg} 
          </p>

          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

function LoginPage({history, location}) {
  // const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const {loadingUserInfo, userInfo} = userLogin;

  // const githubUser = useSelector(state => state.githubUser);
  // const {loadingUserRequest, userDetails} = githubUser;

  useEffect(() => {
    let resCode = location.search.split('=')[1];
    dispatch(login(resCode));
    if(userInfo) {
      history.push('/repository')
    }
  }, [userInfo, dispatch, history, location])

  return (
    <div className='login-page'>

      {/* hidden loading state */}
        <MyVerticallyCenteredModal
          show={loadingUserInfo}
          // onHide={() => setModalShow(false)}
          msg={
            // loadingUserRequest ? 'Please be patient, running background checks':
            loadingUserInfo ? 'Valuatng redirect route protocaols' : ''
          }
        />
      {/* hidden loading state */}

      <div className='login-form'>

        <img 
          src='assets/logo/github-logo.png'
          alt='github logo'
          className='github-logo'
        />

        <p className='form-title'>
          Hello there !!
        </p>

        <p className='form-title'>
          Login to my Github Task
        </p>

        <a
          href="https://github.com/login/oauth/authorize?client_id=f57fc45a6dd209a0b880"
          target={"_blank"}
          rel={"noreferrer"}
          style={{width: '100%', textAlign: 'center'}}
        >
          <button
            className='login-btn'
            // onClick={() => {dispatch(githubUserRequest())}}
          >
            Login
          </button>
        </a>

      </div>

    </div>
  )
}

export default LoginPage