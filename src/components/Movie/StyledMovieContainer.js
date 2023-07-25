import styled from 'styled-components';

const StyledMovieContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 35px;
    margin: 15px 0;
    font-size: 20px;
    border: 1px solid grey;
    border-radius: 5px;
  }

  a:hover {
    box-shadow: 3px 3px 10px -1px rgba(0, 0, 0, 0.75);
  }
`;

export default StyledMovieContainer;
