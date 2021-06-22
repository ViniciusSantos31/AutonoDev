import { Action } from 'redux'
import { BookshelfTypes, removeState, iBookShelf, addState, selectState } from './types';

export interface addToBookshelf extends Action {
  type: BookshelfTypes.ADD_TO,
  payload: addState;
}

export interface removeFromBookshelf extends Action {
  type: BookshelfTypes.REMOVE_FROM,
  payload: removeState,
}

export interface selectBook extends Action {
  type: BookshelfTypes.SELECT,
  payload: selectState
}

export const addToBookshelf = (payload: addState): addToBookshelf => ({
  type: BookshelfTypes.ADD_TO,
  payload,
})

export const removeFromBookshelf = (payload: removeState): removeFromBookshelf => ({
  type: BookshelfTypes.REMOVE_FROM,
  payload,
})

export const selectBook = (payload: selectState): selectBook => ({
  type: BookshelfTypes.SELECT,
  payload,
})
