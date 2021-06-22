import { removeFromBookshelf, addToBookshelf, selectBook } from './actions';
import { iBookShelf, removeState, BookshelfTypes } from './types';

const INITIAL_STATE: iBookShelf = {
  selected: {},
  books: [],
};

const reducer = (state = INITIAL_STATE, action: addToBookshelf | removeFromBookshelf | selectBook) => {
  switch (action.type) {
    case BookshelfTypes.ADD_TO:
      return { ...state, books: [...state.books, action.payload] };
    case BookshelfTypes.REMOVE_FROM:
      return { ...state, books: state.books.filter(item => item.id !== action.payload.id) };
    case BookshelfTypes.SELECT:
      return { ...state, selected: action.payload }
    default:
      return state;
  }
};

export default reducer;
