import { userDataRequested, userDataLoaded, userDataError } from '../actions';
import { getUserData } from '../services/authService';

const initialState = {
  userData: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_USER_DATA_SUCCESS':
      return {
        ...state,
        userData: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_USER_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export const setUserData = getUserDataUrl => dispatch => {
  dispatch(userDataRequested());
  getUserData(getUserDataUrl)
    .then(response => {
      if (response.status !== 'ok') {
        throw new Error('Не удалось загрузить данные профиля')
      } else {
        dispatch(userDataLoaded(response.data));
      }
    })
    .catch(error => {
      dispatch(userDataError(error.message))
    });
}