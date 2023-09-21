import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    age: 0,
    slotDate: "",
    slotTime: "",
  },
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload };
    },
    setAge: (state, action) => {
      return { ...state, age: action.payload };
    },
    setDate: (state, action) => {
      return { ...state, slotDate: action.payload };
    },
    setTime: (state, action) => {
      return { ...state, slotTime: action.payload };
    }
  },
});

export const { setAge, setName, setDate, setTime } = userSlice.actions;

export default userSlice.reducer;
