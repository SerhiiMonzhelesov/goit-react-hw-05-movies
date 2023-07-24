import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
  font-size: 16px;

  li {
    width: fit-content;
  }

  a {
    padding: 5px 0;
  }

  a:hover {
    font-weight: bold;
    color: black;
    text-shadow: 0px 0px 1px rgb(13 86 28 / 71%);
    transition: text-shadow 200ms ease-in-out;
  }
`;
