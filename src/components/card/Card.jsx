import React, { useState } from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

export default function Card() {
  const [edit, setEdit] = useState();
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem('cards')) || []
  );
  const toggleEditMode = () => {
    setEdit(!edit);
  };
  return (
    <div>
      {edit ? (
        <CardEditor cards={cards} setCards={setCards} />
      ) : (
        <CardViewer cards={cards} />
      )}
      <button onClick={toggleEditMode}>
        {edit ? 'Go to Viewer' : 'Go to Editor'}
      </button>
    </div>
  );
}
