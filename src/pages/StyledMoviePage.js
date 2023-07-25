import styled from 'styled-components';

const StyledForm = styled.form`
  margin-top: 25px;

  input {
    height: 35px;
    width: 250px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 10px;
    border: 1px solid grey;
  }

  button {
    height: 35px;
    width: 100px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 1px solid grey;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 3px 3px 10px -1px rgba(0, 0, 0, 0.75);
    font-weight: bold;
  }
`;

export default StyledForm;
