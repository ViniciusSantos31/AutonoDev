import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Button from '../Button';
import { Container } from './styles/PaginationStyled';
import axios from '../../services/api';
import { convertToObject } from 'typescript';

interface ownProps {
  totalItems: number;
  setResults: Function;
  setPagination: Function;
  setLoading: Function;
  pagination: number;
  query: string;
  loading: boolean;
}

const Pagination: React.FC<ownProps> = ({
  totalItems,
  setResults,
  setPagination,
  pagination,
  query,
  setLoading,
  loading,
}) => {
  const [actualPage, setActualPage] = useState<number>(1);

  const handlePage = (num: number) => {
    if (actualPage + num < 1) setActualPage(1);
    else if (actualPage + num > totalItems) setActualPage(totalItems);
    else setActualPage(actualPage + num);
  };

  const [pagi, setPag] = useState<number>(0);

  const handleSearch = async (pag: number = 1) => {
    try {
      setLoading(true);
      await axios
        .get(`${query}&startIndex=${pagi}&maxResults=20`)
        .then(response => {
          setLoading(false);
          setResults(response.data.items);
        });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  useEffect(() => {
    handleSearch()
  }, [pagi])
  return (
    <Container>
      <Button
        theme="rounded"
        onClick={() => {
          handlePage(-1);
          setPag(pagi - 20);
        }}
        disabled={actualPage === 1 || loading}
      >
        <ChevronLeft />
      </Button>
      <Button
        theme="rounded"
        onClick={() => {
          handlePage(1);
          setPag(pagi + 20);
        }}
        disabled={actualPage === totalItems || loading}
      >
        <ChevronRight />
      </Button>
      <div>{`${actualPage} de ${totalItems}`}</div>
    </Container>
  );
};

export default Pagination;
