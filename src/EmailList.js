import React from 'react';
import './EmailList.css';

import Checkbox from '@mui/material/Checkbox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

//For settings left
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

//Section
import Section from './Section';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from './EmailRow';

function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className='emailList__sections'>
        <Section Icon={InboxIcon} title='Primary' color='red' selected />
        <Section Icon={PeopleIcon} title='Socail' color='#1A73E8' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </div>

      <div className='emailList__list'>
        <EmailRow
          title='Freeletics'
          subject='Happy International Friendship'
          description='This is a test'
          time='10pm'
        />
      </div>
    </div>
  );
}

export default EmailList;
