// == Import npm
import React from 'react';

// == Import Style
import './styles.scss';

// Impoet components =>
import TodayWeater from 'src/components/TodayWeater';
import Hightlights from 'src/components/Hightlights';

// == Composant
const App = () => (
  <div className="app">
    <div className="app_container-flex">
      <TodayWeater />
      <Hightlights />
    </div>
  </div>
);

// == Export
export default App;
