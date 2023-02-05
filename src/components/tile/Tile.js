import React from "react";


export const Tile = ({tile}) => {
  const obj = Object.values(tile);
  return (
    <div className="tile-container">
      {
        obj.map((item, index) => {
          return <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>
            {item}
          </p>
        })
      }
    </div>
  );
};
