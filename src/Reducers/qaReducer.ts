import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.';


export type QuestionAndAnswer = {
  question: string;
  answer: string;
}

export type QuestionAndAnswerState = {
  data: QuestionAndAnswer[];
}

const initialState: QuestionAndAnswerState = {
  data: [
    {
      question: "Is this a good application?",
      answer: "Yes this is a good application!"
    }
  ],
}



export const qaReducer = createSlice({
  name: 'Q/A',
  initialState,
  reducers: {
    addQuestion: (state,{payload}:PayloadAction) =>{

    }
  },
})

export const {addQuestion} = qaReducer.actions;
export const qaSelector = (state: RootState) => state.qaReducer
export default qaReducer.reducer;