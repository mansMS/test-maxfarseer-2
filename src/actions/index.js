
const loginRequested = () => {
	return {
		type: 'LOG_IN_REQUEST'
	}
}
const loginCompleted = user => {
	return {
		type: 'LOG_IN_SUCCESS',
		payload: user
	}
}
const loginError = error => {
	return {
		type: 'LOG_IN_FAILURE',
		payload: error
	}
}

const logout = () => {
	return {
		type: 'LOG_OUT'
	}
}

const userDataRequested = () => {
	return {
		type: 'FETCH_USER_DATA_REQUEST'
	}
}

const userDataLoaded = userData => {
	return {
		type: 'FETCH_USER_DATA_SUCCESS',
		payload: userData
	}
}

const userDataError = error => {
	return {
		type: 'FETCH_USER_DATA_FAILURE',
		payload: error
	}
}

const newsRequested = () => {
	return {
		type: 'FETCH_NEWS_REQUEST'
	}
}

const newsLoaded = news => {
	return {
		type: 'FETCH_NEWS_SUCCESS',
		payload: news
	}
}

const newsError = error => {
	return {
		type: 'FETCH_NEWS_FAILURE',
		payload: error
	}
}

export {
	loginRequested, loginCompleted, loginError,
	logout,
	userDataRequested, userDataLoaded, userDataError,
	newsRequested, newsLoaded, newsError
};