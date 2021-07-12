import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote({ title: `New Note ${Math.floor(Math.random() * 10)}`, content: 'Lorem ipsum dolor sit amet' }));
  };

  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" />
        <StyledFormField isTextarea label="Content" name="content" id="content" />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
