import React from 'react';

import { OverviewProps } from '../types';
import { formatDate, formatNumber } from '../utils';

const Overview: React.FC<OverviewProps> = ({ totalDeaths, date, sources }) => (
  <footer className="overview">
    <h1 className="overview__title">
      Celkem {formatNumber(totalDeaths)} obětí{' '}
      <span className="nowrap">k {formatDate(date)}</span>
    </h1>
    <p className="overview__sources">
      Zdroje:{' '}
      <a
        href={sources.deaths.source}
        rel="noreferrer"
        target="_blank"
        title={`Aktualizováno: ${formatDate(sources.deaths.modified, {
          dateStyle: 'full',
          timeStyle: 'long',
        })}`}
      >
        MZ ČR API 1
      </a>{' '}
      <a
        href={sources.overview.source}
        rel="noreferrer"
        target="_blank"
        title={`Aktualizováno: ${formatDate(sources.overview.modified, {
          dateStyle: 'full',
          timeStyle: 'long',
        })}`}
      >
        MZ ČR API 2
      </a>
    </p>
  </footer>
);

export default Overview;
