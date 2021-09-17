// == Import npm
import React, { useEffect } from 'react';

// == Import Style
import './styles.scss';

// Impoet components =>
import TodayWeater from 'src/components/TodayWeater';
import Hightlights from 'src/components/Hightlights';
import Spinner from 'src/components/Spinner';
import Error from 'src/components/Error';

// Import Recoil =>
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { weather, searchCity } from 'src/Recoil';

// == Composant
const App = () => {
  // Fist query =>
  const setSearchCity = useSetRecoilState(searchCity);
  useEffect(() => {
    setSearchCity({
      query: 'paris',
    });
  }, []);

  // Data Api =>
  const weatherValue = useRecoilValueLoadable(weather);

  // Wait promise from Api =>
  if (weatherValue.state === 'loading') return <Spinner />;
  // If Error =>
  if (weatherValue.state === 'hasError') return <Error />;

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
