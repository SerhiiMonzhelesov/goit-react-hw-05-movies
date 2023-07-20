import styled from 'styled-components';

const StyledMovie = styled.div`
  .img-thumb {
    width: 100%;
    max-width: 500px;
    height: 750px;
  }

  & .blur-up {
    filter: blur(5px);
    transition: filter 400ms;
  }

  & .blur-up.lazyloaded {
    filter: blur(0);
  }
`;

export default StyledMovie;
