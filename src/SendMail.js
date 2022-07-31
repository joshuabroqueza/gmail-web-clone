import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon className='sendMail__close' />
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          placeholder='To'
          {...register('to', { required: true })}
          type='text'
        />
        <input
          placeholder='Subject'
          {...register('subject', { required: true })}
          type='text'
        />
        <input
          placeholder='Message'
          {...register('message', { required: true })}
          type='text'
          className='sendMail__message'
        />
        <div className='sendMail__options'>
          <Button
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
