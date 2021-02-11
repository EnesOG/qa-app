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
    },
    {
      question: "Xs this a good application?",
      answer: "Yes this is a good application!"
    }
  ],
  sort:false,
}



 const qaReducer = createSlice({
  name: 'Q/A',
  initialState,
  reducers: {
    addQuestion: (state,{payload}:PayloadAction<QuestionAndAnswer>) => {
      state.data = [...state.data,payload]
    },
    deleteAll:(state) => {
     state.data = []
    },
    deleteEntry:(state,{payload}:PayloadAction<number>) => {
      state.data = state.data.splice(payload,payload);
     },

    toggleSort:(state) => {
     state.sort = !state.sort
    }
  },
})

export const {addQuestion,deleteAll,toggleSort,deleteEntry} = qaReducer.actions;
export const qaSelector = (state: RootState) => state.qaReducer
export default qaReducer.reducer;