export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';

export const setName = name => ({
    type: SET_USER_NAME,
    payload: name,
});

export const setAge = age => ({
    type: SET_USER_AGE,
    payload: age,
});