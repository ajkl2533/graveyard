import React from 'react';

import CrossIcon from '../icons/CrossIcon';
import MarsIcon from '../icons/MarsIcon';
import VenusIcon from '../icons/VenusIcon';
import { getDistrict, getRegion } from '../../data/helpers';
import { DeceasedProps } from '../../types';
import { formatDate } from '../../utils';

const Deceased: React.FC<DeceasedProps & { style?: React.CSSProperties }> = ({
  date,
  age,
  gender,
  region,
  district,
  style,
}) => (
  <div className="card-container" style={style} role="button" tabIndex={0}>
    <div className="card">
      <div className="card__icon">
        <CrossIcon />
      </div>
      <div className="card__content content">
        <h5 className="content__title">
          {gender === 'Z' ? (
            <VenusIcon className="content__icon" />
          ) : (
            <MarsIcon className="content__icon" />
          )}{' '}
          {age} let
        </h5>
        <h6 className="content__subtitle">
          <span className="date">{formatDate(date)}</span>
        </h6>
        <h6 className="content__subtitle">
          <strong>{getDistrict(district)}</strong>
          <br />
          <span className="muted">{getRegion(region)}</span>
        </h6>
      </div>
    </div>
  </div>
);
export default Deceased;
