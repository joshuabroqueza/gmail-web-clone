import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailRow.css';

import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

function EmailRow({ title, subject, description, time, id }) {
  const history = useNavigate();

  return (
    <div className='emailRow' onClick={() => history('/mail')}>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className='emailRow__title'>
        <h3>{title}</h3>
      </div>
      <div className='emailRow__message'>
        <h4>
          {subject}{' '}
          <span className='emailRow__description'>-{description}</span>
        </h4>
      </div>
      <p className='emailRow__time'>{time}</p>
    </div>
  );
}

export default EmailRow;
