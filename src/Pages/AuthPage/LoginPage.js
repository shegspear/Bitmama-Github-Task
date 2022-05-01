import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

function LoginPage({location, history}) {
  // const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const {loadingUserInfo, error, userInfo} = userLogin;

  // const githubUser = useSelector(state => state.githubUser);
  // const {loadingUserRequest, userDetails} = githubUser;

  // function logMeIn(code) {
  //   fetch(`https://github.com/login/oauth/access_token?client_id=f57fc45a6dd209a0b880?client_secret=09d76a78818935dbd508895e7ea05821aae4a8f8?code=${code}?redirect_uri=https://dreamy-lamington-1f6400.netlify.app/repository`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Access-Control-Allow-Origin" : "*",
  //       "Accept" : "application/json",
  //       "Content-type" : "application/json"
  //       }
  //   }
  //   ).then(res => console.log(res))
  //   .catch(err => console.log(err))
  // };

  useEffect(() => {
    let resCode = window.location.search.split('=')[1];
    if (resCode !== undefined) {
      dispatch(login(resCode));
      // logMeIn(resCode)
    }
    
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

        { error && (
            <div className='mt-5 fail-safe-cont'>
              <p className='fail-safe-title'>
                Experiencing CORS restriction from Github servers,
                please use the backup access
              </p>
    
              <div className='text-center' style={{width: '100%'}}>
                <Link to="/repository">
                  <button
                    className='login-btn'
                  >
                    access 
                  </button>
                </Link>
              </div>
           </div>
          )
        }

      </div>

    </div>
  )
}

export default LoginPage