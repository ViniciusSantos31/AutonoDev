import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import { Container } from './styles/CardBookStyled';

const CardBookSkeleton: React.FC = () => {
  return (
    <Container>
      <Skeleton variant="rect" width="200px" height="364px" animation="wave" />
      <Skeleton variant="text" animation="wave" width="300px" />
      {/* {detail !== '' ? <div className="detail">{detail}</div> : null} */}
      <div className="more">
        <Skeleton variant="text" animation="wave" width="200px" />
      </div>
    </Container>
  );
};

export default CardBookSkeleton;
