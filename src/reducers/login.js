import { loginRequested, loginCompleted, loginError } from '../actions';
import { postData } from '../services/authService';
import { isEmailValid, isPasswordValid } from '../helpers/inputValidation';

const initialState = {
	id: null,
	email: null,
	loading: false,
	error: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN_REQUEST':
			return {
				...state,
				loading: true,
				error: null
			}
		case 'LOG_IN_SUCCESS':
			return {
				...state,
				id: action.payload.id,
				email: action.payload.email,
				loading: false,
				error: null
			}
		case 'LOG_IN_FAILURE':
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case 'LOG_OUT':
			return {
				...state,
				id: null,
				email: null
			}
		default:
			return state;
	}
}

export const setLogin = (postUrl, email, password, setPassword) => dispatch => {
	dispatch(loginRequested());
	if (!isEmailValid(email) || !isPasswordValid(password)) {
		dispatch(loginError('Имя пользователя или пароль введены не верно'));
		setPassword('');
	} else {
		postData(postUrl, { email, password })
			.then(response => {
				if (response.status !== 'ok') {
					throw new Error('Имя пользователя или пароль введены не верно')
				} else {
					dispatch(loginCompleted({ id: response.data.id, email }));
				}
			})
			.catch(error => {
				dispatch(loginError(error.message));
				setPassword('');
			});
	}
}