import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.';


export type QuestionAndAnswer = {
  question: string;
  answer: string;
}

export type QuestionAndAnswerState = {
  data: QuestionAndAnswer[];
  sort: boolean;
}

const initialState: QuestionAndAnswerState = {
  data: [
    {
      question: "Is this a good application?",
      answer: "Yes this is a good application!"
    }
  ],
  sort:false
}



 const qaReducer = createSlice({
  name: 'Q/A',
  initialState,
  reducers: {
    addQuestion: (state,{payload}:PayloadAction) => {

    },
    deleteAll:(state,{payload}:PayloadAction) => {
      state = {...state, data:[]}
      return state;
    
    }
  },
})

export const {addQuestion,deleteAll} = qaReducer.actions;
export const qaSelector = (state: RootState) => state.qaReducer
export default qaReducer.reducer;