import { getNews } from '../services/authService';
import { newsRequested, newsLoaded, newsError } from '../actions';

const initialState = {
  news: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        news: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_NEWS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export const setNews = getNewsUrl => dispatch => {
  dispatch(newsRequested());
  getNews(getNewsUrl)
    .then(response => {
      if (response.status !== 'ok') {
        throw new Error('Не удалось загрузить новости')
      } else {
        dispatch(newsLoaded(response.data));
      }
    })
    .catch(error => {
      dispatch(newsError(error.message))
    })
}