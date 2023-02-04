import React from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LinkedinIcon from './Pictures/LinkedinIcon.png';

const Header = () => {
  return (
    <div className='header'>

        <div className='header_left'>
            <img src={LinkedinIcon}/>

            <div className='header_search'>
                <SearchIcon/>
                <input type='text'/>
            </div>
        </div>

        <div className='header_right'>
          <HeaderOptions Icon ={ HomeIcon} title ='Home' />
          <HeaderOptions Icon = {SupervisorAccountIcon} title ='My Network' />
          <HeaderOptions Icon ={ HomeIcon} title ='Home' />
          <HeaderOptions Icon ={ HomeIcon} title ='Home' />
          <HeaderOptions Icon ={ HomeIcon} title ='Home' />
          <HeaderOptions avatar={LinkedinIcon} title = 'Me' />
          
        </div>
    </div>
  )
}

export default Header