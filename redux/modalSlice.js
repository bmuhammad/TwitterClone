
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signupModalOpen: false

}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
        state.signupModalOpen = true
    },
    closeSignupModal: (state) => {
        state.signupModalOpen = false
    }
  }
});

export const {openSignupModal, closeSignupModal} = modalSlice.actions

export default modalSlice.reducer