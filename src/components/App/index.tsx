// == Import npm
import React from 'react';

// == Import Style
import './styles.scss';

// Impoet components =>
import TodayWeater from 'src/components/TodayWeater';
import Hightlights from 'src/components/Hightlights';
import Spinner from 'src/components/Spinner';

import { useRecoilValueLoadable } from 'recoil';
import { weather } from 'src/Recoil';

// == Composant
const App = () => {
  const weatherValue = useRecoilValueLoadable(weather);

  if (weatherValue.state === 'loading') return <Spinner />;
  if (weatherValue.state === 'hasError') {
    return <div>Erreur de récupération des données</div>;
  }

  return (
    <div className="app">
      <div className="app_container-flex">
        <TodayWeater {...weatherValue.contents} />
        <Hightlights {...weatherValue.contents} />
      </div>
    </div>
  );
};

// == Export
export default App;
