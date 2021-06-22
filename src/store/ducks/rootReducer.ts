import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import book from './book';

const reducer = combineReducers({
  book,
});

const persistor = {
  key: 'books',
  storage,
  blacklist: [],
  transforms: [],
}

export default persistReducer(persistor, reducer);
