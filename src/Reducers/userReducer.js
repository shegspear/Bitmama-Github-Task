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

export const userLoginReducer = (
    state = { }, 
    action
    ) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loadingUserInfo: true};

        case USER_LOGIN_SUCCESS:
            return {loadingUserInfo: false, userInfo: action.payload};

        case USER_LOGIN_FAIL:
            return {loadingUserInfo: false, error: action.payload};
            
        default:
            return state;    
    };
};

export const githubUserReducer = (
    state = {},
    action
    ) => {
    switch(action.type) {
        case GITHUB_USER_REQUEST_REQUEST:
            return {loadingUserRequest: true};

        case GITHUB_USER_REQUEST_SUCCESS:
            return {loadingUserRequest: false, userDetails: action.payload};

        case GITHUB_USER_REQUEST_FAIL:
            return {loadingUserRequest: false, error: action.payload};
        
        default:
            return state;
    };
};

export const getUserDataReducer = (
    state = {},
    action
    ) => {
    switch(action.type) {
        case USER_DATA_REQUEST_REQUEST:
            return {loadingUserData: true};

        case USER_DATA_REQUEST_SUCCESS:
            return {loadingUserData: false, userData: action.payload};

        case USER_DATA_REQUEST_FAIL:
            return {loadingUserData: false, error: action.payload};
        
        default:
            return state;
    };
};