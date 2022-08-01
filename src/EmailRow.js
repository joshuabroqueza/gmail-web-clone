import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailRow.css';

import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({ title, subject, description, time, id }) {
  const history = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        title,
        subject,
        description,
        time,
        id,
      })
    );

    history('/mail');
  };

  return (
    // <div className='emailRow' onClick={openMail}>
    <div className='emailRow' onClick={openMail}>
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
