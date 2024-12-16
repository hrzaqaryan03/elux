import { createSlice } from "@reduxjs/toolkit";

const customerReportSlice = createSlice({
  name: "customerReports",
  initialState: {
    reports: [
      {
        id: 1,
        report:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, pariatur.",
        name: "Jenny Wilson"
      },
      {
        id: 2,
        report:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolore nisi et earum fuga nulla voluptatem sint reprehenderit nam a, aliquid veritatis ipsa dolorum doloribus! Fugit consectetur facilis aliquam delectus!",
        name:'Jane Cooper'
      },
      {
        id:3,
        report:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore dolorum veritatis laboriosam praesentium earum?',
        name:'Leslie Alexander'
      }
    ],
  },
  reducers:{}
});


export default customerReportSlice.reducer
