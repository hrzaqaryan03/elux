import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    images: [
        '/assets/img/bg1.png',
        '/assets/img/bg4.png',
        '/assets/img/bg3.png',
        '/assets/img/bg3.png',
      ],
}

const mainSlice = createSlice({
    name:'main',
    initialState,
    reducers:{},
});

export default mainSlice.reducer