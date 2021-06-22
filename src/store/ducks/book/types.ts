/**
 * Action types
 * @GET_ALL_BOOKS get all books
 * @GET_ONE_BOOKS get book infos
 */

export enum BookshelfTypes {
  ADD_TO = '@book/ADD_TO',
  REMOVE_FROM = '@book/REMOVE_FROM',
  SELECT = '@book/SELECT',
}

export interface iBook {
  id?: string;
  selfLink: string;
  volumeInfo?: {
    title: string;
    subtitle: string;
    publishedDate: string;
    authors: [];
    imageLinks: { thumbnail: string; smallThumbnail: string };
    description: string;
    infoLink: string;
  };
}

export interface selectState {
  book: iBook;
}

export interface addState {
  selected: iBook | {};
  books: iBook[];
}

export interface removeState {
  id: string;
}

export type iBookShelf = addState | removeState | selectState;
