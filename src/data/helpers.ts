import { __, identity, memoizeWith, prop } from 'ramda';

import { Districts, Regions } from '../types';
import { districts, regions } from './nuts';

export const getRegion: (region: Regions) => string = memoizeWith(
  identity,
  prop(__, regions),
);
export const getDistrict: (district: Districts) => string = memoizeWith(
  identity,
  prop(__, districts),
);
