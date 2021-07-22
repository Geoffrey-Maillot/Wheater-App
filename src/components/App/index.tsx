// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

interface Props {
  title: string;
};

const Title = ({title}: Props) => <h1>{title}</h1>

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <Title title={"composant: App"}/>
  </div>
);

// == Export
export default App;
