import axios from "axios";

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    GITHUB_USER_REQUEST_REQUEST,
    GITHUB_USER_REQUEST_SUCCESS,
    GITHUB_USER_REQUEST_FAIL,
    USER_DATA_REQUEST_REQUEST,
    USER_DATA_REQUEST_SUCCESS,
    USER_DATA_REQUEST_FAIL
} from '../Constants/userConstants';

// const clientID = process.env.REACT_APP_CLIENT_ID;
// const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
// const redirectUrl = process.env.REACT_APP_REDIRECT_URL;

export const login = (code) => async (dispatch) => {

    try {
  
        dispatch({
            type: USER_LOGIN_REQUEST,
        });
  
        const config = {
            Headers: {
            'Access-Control-Allow-Origin' : '*',
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
            }
        };
  
        const {data} = await axios.post(`https://github.com/login/oauth/access_token?client_id=f57fc45a6dd209a0b880?client_secret=09d76a78818935dbd508895e7ea05821aae4a8f8?code=${code}?redirect_uri=https://dreamy-lamington-1f6400.netlify.app/repository`, 
            config
        );
  
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
  
        localStorage.setItem('userInfo', JSON.stringify(data));
  
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error
        });
    }
  
};

export const githubUserRequest = () => async(dispatch) => {

    try {

        dispatch({
            type: GITHUB_USER_REQUEST_REQUEST
        });

        const config = {
            Headers: {
                'Content-Type' : 'application/json'
            }
        };

        const {data} = await axios.get(`https://github.com/login/oauth/authorize?client_id=f57fc45a6dd209a0b880`, config);
  
        dispatch({
            type: GITHUB_USER_REQUEST_SUCCESS,
            payload: data
        });

    } catch(error) {
        console.log(error)
        dispatch({
            type: GITHUB_USER_REQUEST_FAIL,
            payload: error
        });
    }

}; 

export const getUserData = () => async (dispatch, getState) => {
    
    try {

        dispatch({
            type: USER_DATA_REQUEST_REQUEST
        });

        const {userLogin: {userInfo}} = getState();

        const config = {
            Headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${userInfo.access_token}`
            }
        };

        const {data} = await axios.get('https://api.github.com/user',config);

        dispatch({
            type: USER_DATA_REQUEST_SUCCESS,
            payload: data
        });

    } catch(error) {
        dispatch({
            type: USER_DATA_REQUEST_FAIL,
            payload: error
        })
    }
    
}; 