import { districts, regions } from './data/nuts';

export type Regions = keyof typeof regions;
export type Districts = keyof typeof districts;
export type Gender = 'M' | 'Z';

export type Data<D> = {
  modified: string;
  source: string;
  data: D;
};

export type Victims = {
  datum: string;
  vek: number;
  pohlavi: Gender;
  kraj_nuts_kod: Regions;
  okres_lau_kod: Districts;
};

export type OverviewData = {
  datum: string;
  provedene_testy_celkem: number;
  potvrzene_pripady_celkem: number;
  aktivni_pripady: number;
  vyleceni: number;
  umrti: number;
  aktualne_hospitalizovani: number;
  provedene_testy_vcerejsi_den: number;
  potvrzene_pripady_vcerejsi_den: number;
  potvrzene_pripady_dnesni_den: number;
  provedene_testy_vcerejsi_den_datum: string;
  potvrzene_pripady_vcerejsi_den_datum: string;
  potvrzene_pripady_dnesni_den_datum: string;
  provedene_antigenni_testy_celkem: number;
  provedene_antigenni_testy_vcerejsi_den: number;
  provedene_antigenni_testy_vcerejsi_den_datum: string;
  vykazana_ockovani_celkem: number;
  vykazana_ockovani_vcerejsi_den: number;
  vykazana_ockovani_vcerejsi_den_datum: string;
};

export type DeceasedProps = {
  date: string;
  age: number;
  gender: Gender;
  region: Regions;
  district: Districts;
};

export type DeathlogProps = {
  deaths: Victims[];
  source: string;
  modified: string;
};

type Source = {
  source: string;
  modified: string;
};
type DataTypes = 'deaths' | 'overview';

export type OverviewProps = {
  totalDeaths: number;
  date: string;
  sources: Record<DataTypes, Source>;
};
