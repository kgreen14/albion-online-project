import styled from 'styled-components';

const NavBar = styled.div`
  height: 60px;
  background-color: #1C2A45;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 5px solid #101E33;
  a {
    padding: 0 15px;
    color: white;
    text-decoration: none;
  }
  span {
    margin: auto 0;
    padding: 15px 10px;
    height: 80%;
    color: #F95D1C;
    
  }
`;

export default NavBar;