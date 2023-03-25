import React, { useState, useEffect } from 'react';

export default function CardEditor({ cards, setCards }) {
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const addCard = () => {
    setCards([
      ...cards,
      {
        id: cards.length,
        front: frontText,
        back: backText,
      },
    ]);
  };
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);
  const deleteCard = (id) => {
    const filteredCards = [...cards].filter((item) => item.id !== id);
    setCards(filteredCards);
  };
  return (
    <div>
      <h1>Card Editor</h1>
      <table>
        <thead>
          <tr>
            <td>
              <b>Front</b>
            </td>
            <td>
              <b>Back</b>
            </td>
            <td>
              <b>Delete</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {cards.map((card, i) => {
            return (
              <tr key={i + card.back} id={card.id}>
                <td>{card.front}</td>
                <td>{card.back}</td>
                <td>
                  <button onClick={() => deleteCard(card.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <input
          type='text'
          name='frontCard'
          id='frontCard'
          placeholder='Front of Card'
          onChange={(e) => setFrontText(e.target.value)}
        />
        <input
          type='text'
          name='backCard'
          id='backCard'
          placeholder='Back of Card'
          onChange={(e) => setBackText(e.target.value)}
        />
        <button onClick={addCard}>Add</button>
      </div>
    </div>
  );
}
