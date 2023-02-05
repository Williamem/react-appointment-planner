import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({dataList}) => {
  return (
    <div>
      {
        dataList.map((tile, index) => {
          return (<Tile 
            key={index}
            tile={tile}
          />)
        })
      }
    </div>
  );
};
