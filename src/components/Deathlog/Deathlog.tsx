import React from 'react';
import { unfold } from 'ramda';
import { AutoSizer, List, ListRowRenderer } from 'react-virtualized';

import Deceased from './Deceased';
import { DeathlogProps, Victims } from '../../types';

const ITEM_WIDTH = 300;

const generateIndexes = (start: number, end: number): number[] =>
  unfold((i: number) => (i > end ? false : [i, i + 1]), start);

const rowRenderer = (
  itemsPerRow: number,
  deaths: Victims[],
): ListRowRenderer => ({ index, key, style }) => {
  const fromIndex = index * itemsPerRow;
  const toIndex = Math.min(fromIndex + itemsPerRow, deaths.length);
  const indexes = generateIndexes(fromIndex, toIndex - 1);

  return (
    <div className="row" key={key} style={style}>
      {indexes.map((itemIndex) => {
        const item = deaths[itemIndex];
        return (
          <Deceased
            key={`${key}-${itemIndex}`}
            age={item.vek}
            date={item.datum}
            district={item.okres_lau_kod}
            gender={item.pohlavi}
            region={item.kraj_nuts_kod}
            style={{ width: `${100 / itemsPerRow}%` }}
          />
        );
      })}
    </div>
  );
};

const Deathlog: React.FC<DeathlogProps> = ({ deaths }) => {
  return (
    <div className="grid-container">
      <AutoSizer>
        {({ width, height }) => {
          const itemsPerRow = Math.floor(width / ITEM_WIDTH);

          return (
            <List
              height={height}
              width={width}
              rowCount={Math.ceil(deaths.length / itemsPerRow)}
              rowHeight={224}
              rowRenderer={rowRenderer(itemsPerRow, deaths)}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default Deathlog;
