import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Navigator>
      <Button>Home</Button>
      <Button>useAxios</Button>
      <Button>useBeforeLeave</Button>
      <Button>useClick</Button>
      <Button>useConfirm</Button>
      <Button>useEffect</Button>
      <Button>useFadeIn</Button>
      <Button>useFullscreen</Button>
      <Button>useHover</Button>
      <Button>useInput</Button>
      <Button>useNetwork</Button>
      <Button>useNotification</Button>
      <Button>usePreventLeave</Button>
      <Button>useScroll</Button>
      <Button>useState</Button>
      <Button>useTabs</Button>
      <Button>useTitle</Button>
    </Navigator>
  );
};

const Navigator = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 16px;
  background-color: white;
  box-shadow: 0 0 1px lightgrey;
  z-index: 2000;
`;

const Button = styled.button`
  display: inline-block;
  margin: 5px;
`;

export default Nav;
