import styled from 'styled-components';

export const StyledCastList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;

  & li {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    padding: 8px;
    max-width: 200px;
  }
  & .thumb {
    max-width: 200px;
  }

  & img {
    display: block;
    width: 100%;
  }

  & .blur-up {
    filter: blur(5px);
    transition: filter 400ms;
  }

  & .blur-up.lazyloaded {
    filter: blur(0);
  }
`;
