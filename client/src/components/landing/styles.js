import styled from "styled-components";

const Div = styled.div`
  width: 500px;
  margin-left: 30px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  color: #9a9a9d;
  font-size: 20px;
  text-align: center;
  .button {
    button {
      background-color: #7665BD;
      color: white;
      border-radius: 15px;
      border: 1px solid gray;
      padding: 12px 20px;
      cursor: pointer;
      &:hover {
        background-color:#7665BD;
        color: #f3f3f3;
        transform: scale(1.05);
      }
    }
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;

export default Div;
