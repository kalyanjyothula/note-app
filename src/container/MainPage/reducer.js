import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const preNotes = [
  {
    id: 0,
    title: "Sample Note-1",
    description:
      "The never-before-seen texts include messages from Trump's family \n daughter Ivanka Trump, son-in-law Jared Kushner and son Donald Trump Jr.-- as well as White House and campaign officials, Cabinet members,Republican Party leaders, January 6 rally organizers, Rudy Giuliani, My Pillow CEO Mike Lindell, Sean Hannity and other Fox hosts. There are also text exchanges with more than 40 current and former Republican members of Congress, including Sen. Ted Cruz of Texas and Reps. Jim Jordan of Ohio, Mo Brooks of Alabama and Marjorie Taylor Greene of Georgia.lso text exchanges with more than 40 current and former Republican members o Congress, including Sen. Ted Cruz of Texas and Reps. Jim Jordan of Ohio, Mo Brooks of Alabama and Marjorie Taylor Greene of Georgia.",
    fav: false,
  },
  {
    id: 1,
    title: "Sample Note-2",
    description:
      "The never-before-seen texts include messages from Trump's family \n daughter Ivanka Trump, son-in-law Jared Kushner and son Donald Trump Jr.-- as well as White House and campaign officials, Cabinet members,Republican Party leaders, January 6 rally organizers, Rudy Giuliani, My Pillow CEO Mike Lindell, Sean Hannity and other Fox hosts. There are also text exchanges with more than 40 current and former Republican members of Congress, including Sen. Ted Cruz of Texas and Reps. Jim Jordan of Ohio, Mo Brooks of Alabama and Marjorie Taylor Greene of Georgia.lso text exchanges with more than 40 current and former Republican members o Congress, including Sen. Ted Cruz of Texas and Reps. Jim Jordan of Ohio, Mo Brooks of Alabama and Marjorie Taylor Greene of Georgia.",
    fav: true,
  },
  {
    id: 2,
    title: "Sample Note-3",
    description:
      "The never-before-seen texts include messages from Trump's family \n daughter Ivanka Trump, son-in-law Jared Kushner and son Donald Trump Jr.-- as well as White House and campaign officials, Cabinet members,Republican Party leaders, January 6 rally organizers, Rudy Giuliani, My Pillow CEO Mike Lindell, Sean Hannity and other Fox hosts. There are also text exchanges with more than 40 current and former Republican members of Congress, including Sen. Ted Cruz of Texas and Reps. Jim Jordan of Ohio, Mo Brooks of Alabama and Marjorie Taylor Greene of Georgia.lso text exchanges with more than 40 current and former Republican members o Congress, including Sen. Ted Cruz of Texas and Reps. Jim Jordan of Ohio, Mo Brooks of Alabama and Marjorie Taylor Greene of Georgia.",
    fav: false,
  },
  {
    id: 3,
    title: "Sample Note-4",
    description:
      "The never-before-seen texts include messages from Trump's family \n daughter Ivanka Trump, son-in-law Jared Kushner and son Donald Trump Jr.-- as well as White House and campaign officials, Cabinet members,Republican Party leaders, January 6 rally organizers, Rudy Giuliani, My Pillow CEO Mike Lindell, Sean Hannity and other Fox hosts. There are also text exchanges with more than 40 current and former Republican members of Congress, including Sen. Ted Cruz of Texas and Reps. Jim Jordan of Ohio, Mo Brooks of Alabama and Marjorie Taylor Greene of Georgia.lso text exchanges with more than 40 current and former Republican members o Congress, including Sen. Ted Cruz of Texas and Reps. Jim Jordan of Ohio, Mo Brooks of Alabama and Marjorie Taylor Greene of Georgia.",
    fav: false,
  },
];

const mainPage = createSlice({
  name: "mainPage",
  initialState: {
    token: "",
    userDetails: {},
    notes: preNotes,
    showModel: false,
  },
  reducers: {
    updateUserDetails: (state, { type, payload }) => {
      state.userDetails[payload.name] = payload.value;
      state.errorMsg = "";
      state.successMsg = "";
    },
    updateErrorMsg: (state, { payload }) => {
      state.errorMsg = payload;
      state.successMsg = "";
    },
    updateSuccessMsg: (state, { payload }) => {
      state.successMsg = payload;
      state.errorMsg = "";
    },
    updateShowModel: (state, { payload }) => {
      state.showModel = !state.showModel;
      state.errorMsg = "";
      state.successMsg = "";
    },
    addNewNote: (state, { payload }) => {
      // const len = state.notes.length;
      payload.id = Math.random();
      state.notes.push(payload);
      state.successMsg = "Note Created Successfully";
    },
    updatedFavStatus: (state, { payload }) => {
      const index = state.notes.findIndex((x) => x.id === payload);
      state.notes[index].fav = !state.notes[index].fav;
    },
    removeNote: (state, { payload }) => {
      const newNotes = state.notes.filter((x) => x.id !== payload);
      state.notes = newNotes;
    },
    editNote: (state, { payload }) => {
      const index = state.notes.findIndex((x) => x.id === payload.id);
      state.notes[index].title = payload.title;
      state.notes[index].description = payload.description;
      state.successMsg = "Note Created Successfully";
    },
  },
});

export const {
  updateUserDetails,
  updateSuccessMsg,
  updateErrorMsg,
  updateShowModel,
  addNewNote,
  updatedFavStatus,
  removeNote,
  editNote,
} = mainPage.actions;

export const mainPageSelector = (state) => state.mainPage;

export default mainPage;
