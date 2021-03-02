import React from 'react'
import styled from 'styled-components';
import { MenuItem } from '@material-ui/core';

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
function Header() {
    return (
        <Container>
          <Logo>
            MY APP
          </Logo>
          <UserContainer>
            <Main>
            
            </Main>  
            <Name>
               <Link style={{ textDecoration: 'none',color:'white' }} to='/'><MenuItem style={{ paddingLeft: 13 }}>Login</MenuItem></Link>
                <Link style={{ textDecoration: 'none',color:'white' }} to='/registration'><MenuItem style={{ paddingLeft: 13 }}>Sign UP</MenuItem></Link>
               
            </Name>
           
          </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: #121f40;
    color:white;
    display:flex;
    align-items:center;
    justify-content:right;
    position: relative;
   
    box-shadow: 0 1px 0 0 rgb(225 255 255 / 10%);
`  
const Logo = styled.div`
      display: flex;
    margin-right:16px;
    margin-left:16px;
`
const Main = styled.div`
    display: flex;
    margin-right:16px;
    margin-left:16px;
    
`
const SearchContainer = styled.div`
    min-width: 400px;
    margin-left:16px;
    margin-right:16px;
    
`
const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(128 128 128);
    width:100%;
    border-radius: 6px;
    align-items: center;

    input{
        background-color: transparent;
        border: none;
        padding-left:8px;
        padding-right:8px;
        color: white;
        padding-top:4px;
        padding-bottom:4px;
    }
    input:focus{
        outline:none;
    }
`
const UserContainer = styled.div`
    display:flex;
    align-items:center;
    padding-right: 16px;
    position: absolute;
    right:0;

`
const Name = styled.div`
    padding-right:16px;
    display:flex;
`
const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border : 2px solid white;
    border-radius: 3px;
    img{
        width: 100%;
    }
`