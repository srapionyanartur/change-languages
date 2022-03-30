import React, { Component, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';


// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button  type="button" onClick={() => changeLanguage('am')}>
          AM
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          EN
        </button>
      </div>
      <div className="App-intro">
        
      </div>
      <div>{t('description.part1')}</div>
      <div>{t('description.part2')}</div>

    </div>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}