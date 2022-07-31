import { fabClasses } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.openSendMessage = true;
    },
    closeSendMessage: (state) => {
      state.openSendMessage = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

//selectors
export const selectSendMessageIsOpen = (state) =>
  state.mail.selectSendMessageIsOpen;

export default mailSlice.reducer;
