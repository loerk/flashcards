import React, { useState } from 'react';

export default function CardViewer({ cards }) {
  const [flip, setFlip] = useState(false);
  const [currPage, setCurrPage] = useState(0);

  const showNext = () => {
    if (currPage < cards.length - 1) {
      setCurrPage((prev) => prev + 1);
      setFlip(false);
    }
    return currPage;
  };
  const showPrevious = () => {
    if (currPage > 0) {
      setCurrPage((prev) => prev - 1);
      setFlip(false);
    }
  };
  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <>
      <div
        className={flip ? 'flip card back' : 'card front'}
        onClick={handleFlip}
      >
        {cards.map((card, i) => {
          return (
            i === currPage && (
              <div key={i + card.front}>
                <div
                  className='front'
                  id={card.id}
                  style={{ textAlign: 'center' }}
                >
                  {card.front}
                </div>
                <div
                  className={flip ? 'back' : 'hidden'}
                  id={card.id}
                  style={{ textAlign: 'center' }}
                >
                  {card.back}
                </div>
              </div>
            )
          );
        })}
      </div>
      <button onClick={showPrevious}>Previous Card</button>
      <button onClick={showNext}>Next Card</button>
    </>
  );
}
