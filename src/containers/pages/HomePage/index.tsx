import { KeyboardArrowDown, Star, TrendingUp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button';
import CardBook from '../../../components/CardBook';
import CardBookSkeleton from '../../../components/CardBook/Skeleton';
import InputText from '../../../components/Input';
import Pagination from '../../../components/pagination';
import axios from '../../../services/api';
import { iBook } from '../../../store/ducks/book/types';
import {
  Body, Buttons, Container, Content, Filter,
  FilterPagination,
  Grid, Header,
  Logo
} from './styles/homePageStyled';


const HomePage: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const [results, setResults] = useState<iBook[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(1);
  const [pag, setPag] = useState<number>(0);
  const favs = useSelector((store: any) => store.book.books);
  const [isOpen, setOpen] = useState<boolean>(false);
  

  const handleSearch = async () => {
    setLoading(true);
    setOpen(false);
    await axios
      .get(`${query}&startIndex=${pag}&maxResults=20`)
      .then(response => {
        setLoading(false);
        setResults(response.data.items);
        setTotalItems(Math.ceil((Number((response.data.totalItems / 20)))));
      })
      .catch(e => setLoading(false));
  };

  const rollDown =() => {
    const button = document.getElementById('button');
    button?.click();
  }

  useEffect(() => {
    rollDown();
  }, [loading]);
  return (
    <Container>
      <Header>
        <Logo>
          <p>Busca</p>
          <p>Livro</p>
        </Logo>
        <Content>
          <InputText
            value={query}
            setValue={setQuery}
            onSubmit={() => handleSearch()}
          />
        </Content>
        <Buttons>
          <Button theme="primary" onClick={() => {
            setTotalItems(Math.ceil(favs.length / 20));
            setOpen(true);
            setTimeout(() => {
              rollDown()
            }, 150)
          }}
          >
            <Star /> Favoritos
          </Button>
          <Button theme="primary">
            <TrendingUp /> Gráficos
          </Button>
        </Buttons>
        <a href="#books" id="button">
          <Button theme="rounded" className="abs">
            <KeyboardArrowDown />
          </Button>
        </a>
      </Header>
      <Body>
        {(results !== undefined && results.length !== 0) || loading  ? (
          
          <div id="books">
          {(!isOpen && 
            <>
              <Filter id="books">
                <Button theme="secundary">
                  Filtro
                  <KeyboardArrowDown />
                </Button>
              </Filter>
                <FilterPagination id="books">
                  <Pagination
                    totalItems={totalItems}
                    setResults={setResults}
                    setPagination={setPag}
                    pagination={pag}
                    query={query}
                    setLoading={setLoading}
                    loading={loading}
                  />
                </FilterPagination>
              </>
            )}
          </div>
        ) : null}

        <Grid>
          {loading && (
            <>
              <CardBookSkeleton />
              <CardBookSkeleton />
              <CardBookSkeleton />
              <CardBookSkeleton />
              <CardBookSkeleton />
              <CardBookSkeleton />
              <CardBookSkeleton />
              <CardBookSkeleton />
            </>
          )}

          {(isOpen ? favs.map((item: any) => (
            <div id="books">
              <CardBook
                book={item}
                id={item.id}
                title={item.volumeInfo?.title}
                image={
                  item.volumeInfo?.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : ''
                }
                detail={item.volumeInfo?.description}
                key={item.id}
              />
              </div>
            )) : null )}
          {(!loading && !isOpen) &&
            results.map(item => (
              <CardBook
                book={item}
                id={item.id}
                title={item.volumeInfo?.title}
                image={
                  item.volumeInfo?.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : ''
                }
                detail={item.volumeInfo?.description}
                key={item.id}
              />
            ))}
        </Grid>
      </Body>
    </Container>
  );
};

export default HomePage;
