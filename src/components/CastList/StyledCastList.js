import styled from 'styled-components';

export const StyledCastList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  gap: 15px;
  width: 100%;
  background-color: #80808021;
  border-radius: 10px;

  li {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #696464d4;
    max-width: 120px;
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
    box-shadow: 3px 3px 10px -1px rgba(0, 0, 0, 0.75);
  }

  .thumb {
    max-width: 120px;
  }

  img {
    display: block;
    width: 100%;
  }

  .blur-up {
    filter: blur(5px);
    transition: filter 400ms;
  }

  .blur-up.lazyloaded {
    filter: blur(0);
  }

  .descrActor {
    height: 100%;
    padding: 10px 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h4 {
    margin: 0;
  }
`;
