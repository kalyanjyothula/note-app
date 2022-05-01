import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Model from "../../components/Modal";
import NoteCard from "../../components/NoteCard";
import {
  MainPageButton,
  MainPageButtonContainer,
  MainPageContainerWrapper,
  MainPageNotesContainer,
} from "./elements";
import {
  addNewNote,
  editNote,
  mainPageSelector,
  removeNote,
  updatedFavStatus,
  updateErrorMsg,
  updateShowModel,
} from "./reducer";

export default function MainPage(prop) {
  const dispatch = useDispatch();
  const { notes, showModel, successMsg, errorMsg } =
    useSelector(mainPageSelector);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteId, setNoteId] = useState();

  useEffect(() => {
    // api call for fetching notes
  }, []);
  const handleCreateNoteTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const handleCreateNoteDescription = (e) => {
    const { value } = e.target;
    setDescription(value);
  };
  const Close = () => {
    dispatch(updateShowModel());
    setNoteId("");
  };
  const handleChangeFav = (id) => {
    console.log(id);
    dispatch(updatedFavStatus(id));
  };

  const handleOnDeleteNote = (id) => {
    dispatch(removeNote(id));
  };

  const handleEditNote = (note) => {
    setNoteId(note.id);
    setTitle(note.title);
    setDescription(note.description);
    dispatch(updateShowModel());
  };

  const handleModifyNote = (e) => {
    e.preventDefault();
    // console.log(title, description, "edit");
    if (noteId && (title || description)) {
      dispatch(editNote({ id: noteId, title, description }));
      setTimeout(Close, 1300);
    } else {
      dispatch(updateErrorMsg("Enter data in field !"));
    }
  };

  const handleCreateNewNote = (e) => {
    e.preventDefault();
    if (title || description) {
      dispatch(addNewNote({ title, description }));
      setTimeout(Close, 1300);
    } else {
      dispatch(updateErrorMsg("Enter data in field !"));
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>MainPage</title>
        <meta name="description" content="Description of SignIn" />
      </Helmet>
      <Header height={40} width={40} url="/home" />
      <MainPageContainerWrapper>
        <MainPageButtonContainer>
          <MainPageButton
            type="button"
            name="create"
            onClick={() => handleEditNote("")}
          >
            Create Note
          </MainPageButton>
          {/* <MainPageButton>Display All Notes</MainPageButton> */}
        </MainPageButtonContainer>
        <MainPageNotesContainer>
          {notes.map((x) => {
            return (
              <NoteCard
                id={x.id}
                key={x.title}
                title={x.title}
                description={x.description}
                fav={x.fav}
                onChangeFav={handleChangeFav}
                onDelete={handleOnDeleteNote}
                onEdit={handleEditNote}
              />
            );
          })}
        </MainPageNotesContainer>
      </MainPageContainerWrapper>
      {showModel ? (
        <Model
          openModal={updateShowModel}
          onChangeDescription={handleCreateNoteDescription}
          onChangeTitle={handleCreateNoteTitle}
          onFormSubmit={noteId ? handleModifyNote : handleCreateNewNote}
          title={title}
          description={description}
          successMsg={successMsg}
          errorMsg={errorMsg}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
