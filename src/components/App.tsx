import React from 'react';
import { useQuery } from 'react-query';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { fetchDeaths, fetchOverview } from '../queries';
import { Data, OverviewData, Victims } from '../types';
import { Deathlog } from './Deathlog/index';
import Loading from './Loading';
import Overview from './Overview';

const App: React.FC = () => {
  const { data: deathsData, isLoading: isDeathsDataLoading } = useQuery<
    Data<Victims[]>
  >('deaths', fetchDeaths);
  const { data: overviewData, isLoading: isOverviewDataLoading } = useQuery<
    Data<OverviewData[]>
  >('overview', fetchOverview);

  return (
    <SwitchTransition>
      <CSSTransition
        key={
          isDeathsDataLoading || isOverviewDataLoading ? 'loading' : 'loaded'
        }
        timeout={500}
        addEndListener={(node, done) =>
          node.addEventListener('transitionend', done, false)
        }
        classNames="fade"
      >
        {isDeathsDataLoading || isOverviewDataLoading ? (
          <Loading />
        ) : (
          <>
            <Deathlog
              deaths={(deathsData as Data<Victims[]>).data}
              source={(deathsData as Data<Victims[]>).source}
              modified={(deathsData as Data<Victims[]>).modified}
            />
            <Overview
              totalDeaths={(overviewData as Data<OverviewData[]>).data[0].umrti}
              date={(overviewData as Data<OverviewData[]>).data[0].datum}
              sources={{
                overview: {
                  modified: (overviewData as Data<OverviewData[]>).modified,
                  source: (overviewData as Data<OverviewData[]>).source,
                },
                deaths: {
                  modified: (deathsData as Data<Victims[]>).modified,
                  source: (deathsData as Data<Victims[]>).source,
                },
              }}
            />
          </>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};
export default App;
