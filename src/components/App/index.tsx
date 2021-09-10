// == Import npm
import React from 'react';

// == Import Style
import './styles.scss';

// Impoet components =>
import TodayWeater from 'src/components/TodayWeater';
import Hightlights from 'src/components/Hightlights';

import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import { weather } from 'src/Recoil';
import { searchCity } from '../../Recoil/index';

// == Composant
const App = () => {
  const weatherValue = useRecoilValueLoadable(weather);
  console.log(weatherValue.contents);

  return (
    <div className="app">
      <div className="app_container-flex">
        <pre>{JSON.stringify(weatherValue.contents)}</pre>

        <TodayWeater />
        <Hightlights />
      </div>
    </div>
  );
};

// == Export
export default App;
