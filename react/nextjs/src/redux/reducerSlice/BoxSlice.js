import { createSlice } from '@reduxjs/toolkit'

export const BoxSlice = createSlice({
  name: 'Box',
  initialState: {
    width: 50,
    height: 50,
    padding: 50,
    leftmargin: 50,
    borderRadius: 0,
    bgcolor: "green"
  },
  reducers: {
    Changetocircle: (state, action) => {
      state.height=state.width
      state.borderRadius= "50%";
    },

    Changetoleftmarginin: (state, action) => {
        state.leftmargin= state.leftmargin+1
      },

      Changetoleftmarginde: (state, action) => {
        state.leftmargin= state.leftmargin-1
      },

      changebg: (state, action) => {
        state.bgcolor= action.payload
      },

  }
})


export const {Changetocircle, Changetoleftmarginin,Changetoleftmarginde,changebg} = BoxSlice.actions

export default BoxSlice.reducer