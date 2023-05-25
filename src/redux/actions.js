const { useState } = require("react");

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';

// const [name, setName] = useState('');
// const [age, setAge] = useState('');

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

export const setAge = name => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
};