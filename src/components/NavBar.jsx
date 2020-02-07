import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

const AppTitle = styled.h4`
font-size: 20px;
margin: 0;
`;
const Ul = styled.ul`
display: flex;
margin: 0;
padding: 0;
list-style-type: none;
`;
const Link = styled.li`
margin: 1em;
&:hover {
    text-decoration: underline;
  }
`;
const NavBarWrapper = styled.nav`
background-color: rgb(0, 121, 191);
color: white;
font-family: Arial;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 15px 0 5px;
`;

export default function NavBar(){
    return(
    <NavBarWrapper>
    <Ul>
        <Link>Home</Link>
        <Link>My boards</Link>
        <Link>About us</Link>
    </Ul>
    <AppTitle>TO DO THINGS</AppTitle>
    <Button>My account</Button>
    </NavBarWrapper>)
}