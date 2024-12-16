import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    services: [
        {
            id:1,
            name:'Hair Extensions and Hair Care',
            desc:'Our expert stylists specialize in high-quality hair extensions and advanced hair care solutions to give you the luscious locks you`ve always dreamed of.'
        },
        {
            id:2,
            name:'Wedding Hairstyles',
            desc:'Brides-to-be can trust our talented team to create stunning and elegant hairstyles for their special day, ensuring you look perfect as you walk down the aisle.'
        },
        {
            id:3,
            name:"Children's Hair Braids",
            desc:"We offer unique and stylish braiding services for children, making sure they leave our salon with a smile and a beautiful, age-appropriate hairstyle."
        },
        {
            id:4,
            name:'Makeup Services',
            desc:"Whether it's for a special occasion or everyday glamour, our makeup artists will enhance your natural beauty with professional techniques and high-quality products."
        }
    ],
    images: {
        first:'assets/img/offers1.png', 
        second:'assets/img/offers2.png'
    }
    
    
}

const offersSlice = createSlice({

    name:'offers',
    initialState,
    reducers:{}
})

    

export default offersSlice.reducer