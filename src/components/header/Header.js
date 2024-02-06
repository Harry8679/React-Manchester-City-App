import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CityLogo from '../utils/Tools';
import { firebase } from '../../firebase';

const Header = ({ user }) => {
//   console.log('user2', user);
  const logoutHandler = () => {
    firebase.auth().signOut()
        .then(() => {
            alert('Sign out');
        }).catch(error => {
            alert('error');
        })
  }
  return (
    <AppBar
        position='fixed'
        style={{
            backgroundColor: '#98c5e9',
            boxShadow: 'none',
            padding: '10px 0',
            borderBottom: '2px solid #00285e'
        }}
    >
        <Toolbar style={{ display: 'flex' }}>
            <div style={{ flexGrow: 1 }}>
                <div className="header_logo">
                    <CityLogo 
                        link={true}
                        linkTo='/'
                        width='70px'
                        height='70px'
                    />
                </div>
            </div>

            <Link to='/the_team'>
                <Button color='inherit'>The Team</Button>
            </Link>
            <Link to='/the_matches'>
                <Button color='inherit'>Matches</Button>
            </Link>
            {user ? 
            <>
                <Link to='/dashboard'>
                    <Button color='inherit'>Dashboard</Button>
                </Link>
                <Button color='inherit' onClick={() => logoutHandler()}>Log out</Button>
            </> : 
            <Link to='/sign-in'>
                <Button color='inherit'>Login in</Button>
            </Link>
            }
        </Toolbar>
    </AppBar>
  )
}

export default Header;
