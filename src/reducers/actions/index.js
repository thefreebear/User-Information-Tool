import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchUser = () => async dispatch => {
  const response = await jsonPlaceholder.get('/users');

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const deleteUser = (id) => async dispatch => {

  dispatch({ type: 'DELETE_USER', payload: id });
};
