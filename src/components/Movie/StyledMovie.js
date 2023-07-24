import styled from 'styled-components';

const StyledMovie = styled.div`
  display: flex;
  gap: 15px;

  h1,
  h2,
  h3 {
    margin: 0;
  }

  p {
    font-size: 14px;
  }

  .img-thumb {
    width: 100%;
    max-width: 300px;
  }

  img {
    width: 100%;
  }

  .blur-up {
    filter: blur(5px);
    transition: filter 400ms;
  }

  .blur-up.lazyloaded {
    filter: blur(0);
  }
`;

export default StyledMovie;
