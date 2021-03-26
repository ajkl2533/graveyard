import { Data, OverviewData, Victims } from '../types';

const BASE_URL = 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19';

export async function fetchOverview(): Promise<Data<OverviewData[]>> {
  return fetch(`${BASE_URL}/zakladni-prehled.json`).then((res) => res.json());
}

export async function fetchDeaths(): Promise<Data<Victims[]>> {
  return fetch(`${BASE_URL}/umrti.min.json`).then((res) => res.json());
}
