import { Image, Star, StarBorder } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookshelfTypes } from '../../store/ducks/book/types';
import { Container } from './styles/CardBookStyled';

interface ownProps {
  id?: string;
  image?: string;
  title?: string;
  detail?: string;
  book: {
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
    }
  };
}

const CardBook: React.FC<ownProps> = ({ id, image, title, detail, book }) => {

  const dispatch = useDispatch();
  const favs = useSelector((store: any) => store.book.books);
  
  const updateFav = () => {
    if (favs.filter((fav: any) => fav.id === id).length !== 0) dispatch({type: BookshelfTypes.REMOVE_FROM, payload: {id}})
    else dispatch({type: BookshelfTypes.ADD_TO, payload: book})
  }

  const openModal = () => {
    dispatch({
      type: BookshelfTypes.SELECT,
      payload: book,
    })
  }

  return (
    <Container>
      <img
        src={
          image ||
          'http://centrodametropole.fflch.usp.br/sites/centrodametropole.fflch.usp.br/files/user_files/livros/imagem/capa-no-book-cover.png'
        }
        alt={`capa do livro ${title}`}
      />
      <div className="title">
        {title} {favs.filter((fav: any) => fav.id === id).length === 0 ? <StarBorder onClick={updateFav} /> : <Star onClick={updateFav} />}
      </div>
      {/* {detail !== '' ? <div className="detail">{detail}</div> : null} */}
      <div className="more" onClick={openModal}>+ Ver mais</div>
    </Container>
  );
};

export default CardBook;
