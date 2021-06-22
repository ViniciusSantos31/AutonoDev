import React from 'react';
import { useSelector } from 'react-redux';
import { iBook } from '../../store/ducks/book/types';
import MessageDetail from './message';

interface ownProps {
  book: iBook;
}

const ModalDetail: React.FC = ({ children }) => {
  const book = useSelector((store: any) => store.book.selected)
  
  return (
    <>
      {!Boolean(Object.keys(book).length === 0) && <MessageDetail />}
      {children}
    </>
  );
};

export default ModalDetail;
