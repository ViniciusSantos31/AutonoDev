import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookshelfTypes, iBook } from '../../store/ducks/book/types';
import { Container, Content, Modal } from './styles/ModalDetail';

const MessageDetail: React.FC = () => {
  const book: iBook = useSelector((store: any) => store.book.selected)
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({
      type: BookshelfTypes.SELECT,
      payload: {},
    })
  }
  return (
    <>
      <Container onClick={closeModal}></Container>
        <Content>
          <Modal>
          <img src={book.volumeInfo?.imageLinks ? book.volumeInfo?.imageLinks.thumbnail : 'http://centrodametropole.fflch.usp.br/sites/centrodametropole.fflch.usp.br/files/user_files/livros/imagem/capa-no-book-cover.png'} alt={`capa do livro ${book.volumeInfo?.title}`}/>
          <div>
            {book.volumeInfo?.title && <span>{book.volumeInfo?.title}</span>}
            <p>{book.volumeInfo?.description}</p>
            <p>{`Autores: ${book.volumeInfo?.authors ? book.volumeInfo?.authors.map(author => author) : 'Nome dos(as) autores(as) não disponíveis'}`}</p>
            <p>{`Publicação: ${new Date(book.volumeInfo?.publishedDate!).toLocaleDateString('pt-BR')}`}</p>
          </div>
          </Modal>
        </Content>
    </>
  );
};

export default MessageDetail;
