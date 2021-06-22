import { KeyboardArrowDown, SearchRounded } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Filter } from './styles/inputTextStyle';

interface ownProps {
  value: string;
  setValue: Function;
  onSubmit: () => any;
}

const InputText: React.FC<ownProps> = ({ value, setValue, onSubmit }) => {
  return (
    <Container onSubmit={onSubmit}>
      <input
        placeholder="Pesquisar..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <>
        <Filter>
          Filtro
          <KeyboardArrowDown />
        </Filter>
        <SearchRounded className="search" onClick={onSubmit}/>
      </>
    </Container>
  );
};

export default InputText;
