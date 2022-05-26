import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Navigator>
      <NavHooks>
        <Button variant="contained" onClick={() => navigate('/')}>
          Home
        </Button>
        <Button variant="outlined" onClick={() => navigate('/useaxios')}>
          useAxios
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usebeforeleave')}>
          useBeforeLeave
        </Button>
        <Button variant="outlined" onClick={() => navigate('/useclick')}>
          useClick
        </Button>
        <Button variant="outlined" onClick={() => navigate('/useconfirm')}>
          useConfirm
        </Button>
        <Button variant="outlined" onClick={() => navigate('/useeffect')}>
          useEffect
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usefadein')}>
          useFadeIn
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usefullscreen')}>
          useFullscreen
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usehover')}>
          useHover
        </Button>
      </NavHooks>
      <NavHooks>
        <Button variant="outlined" onClick={() => navigate('/useinput')}>
          useInput
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usenetwork')}>
          useNetwork
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usenotification')}>
          useNotification
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usepreventleave')}>
          usePreventLeave
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usescroll')}>
          useScroll
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usestate')}>
          useState
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usetabs')}>
          useTabs
        </Button>
        <Button variant="outlined" onClick={() => navigate('/usetitle')}>
          useTitle
        </Button>
      </NavHooks>
    </Navigator>
  );
};

const Navigator = styled.div`
  display: none;
  align-items: space-around;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px 5px;
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 0 0 1px lightgrey;
  z-index: 2000;
`;
const NavHooks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default Nav;
