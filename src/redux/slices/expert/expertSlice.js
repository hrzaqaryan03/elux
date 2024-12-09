import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    experts: [
        {
            id:1,
            name:'Phoneix Baker',
            pic:'/assets/img/expert1.jpeg',
        },
        {
            id:2,
            name:'Olivia Rhye',
            pic:'/assets/img/expert2.jpeg'
        },
        {
            id:3,
            name:'Lana Steiner',
            pic:'/assets/img/expert3.jpeg'
        },
        {
            id:4,
            name:'Demi Wilkinson',
            pic:'/assets/img/expert4.jpeg'
        },
        {
            id:5,
            name:'Candice Wu',
            pic:'/assets/img/expert5.jpeg'
        },
        {
            id:6,
            name:'Candice Wu',
            pic:'/assets/img/expert5.jpeg'
        },
        
    ]
}

const expertSlice = createSlice({
    name:'experts',
    initialState,
    reducers:{}
})



export default expertSlice.reducer;