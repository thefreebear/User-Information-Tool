export default (state = [], action) => {
    switch (action.type) {
      case 'DELETE_USER':
        return state.filter((user) => user  !== action.payload);
      default:
        return state;
    }
  };