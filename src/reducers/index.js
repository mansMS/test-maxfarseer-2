import { combineReducers } from 'redux';
import login from './login';
import news from './news';
import profile from './profile';

export default combineReducers({
	login, news, profile
})