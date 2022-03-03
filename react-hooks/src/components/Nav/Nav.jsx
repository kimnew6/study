import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Navigator>
      <Button onClick={() => navigate('/')}>Home</Button>
      <Button onClick={() => navigate('/useaxios')}>useAxios</Button>
      <Button onClick={() => navigate('/usebeforeleave')}>
        useBeforeLeave
      </Button>
      <Button onClick={() => navigate('/useclick')}>useClick</Button>
      <Button onClick={() => navigate('/useconfirm')}>useConfirm</Button>
      <Button onClick={() => navigate('/useeffect')}>useEffect</Button>
      <Button onClick={() => navigate('/usefadein')}>useFadeIn</Button>
      <Button onClick={() => navigate('/usefullscreen')}>useFullscreen</Button>
      <Button onClick={() => navigate('/usehover')}>useHover</Button>
      <Button onClick={() => navigate('/useinput')}>useInput</Button>
      <Button onClick={() => navigate('/usenetwork')}>useNetwork</Button>
      <Button onClick={() => navigate('/usenotification')}>
        useNotification
      </Button>
      <Button onClick={() => navigate('/usepreventleave')}>
        usePreventLeave
      </Button>
      <Button onClick={() => navigate('/usescroll')}>useScroll</Button>
      <Button onClick={() => navigate('/usestate')}>useState</Button>
      <Button onClick={() => navigate('/usetabs')}>useTabs</Button>
      <Button onClick={() => navigate('/usetitle')}>useTitle</Button>
    </Navigator>
  );
};

const Navigator = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 4px 16px;
  background-color: white;
  box-shadow: 0 0 1px lightgrey;
  z-index: 2000;
`;

const Button = styled.button`
  margin: 5px 10px;
`;

export default Nav;
