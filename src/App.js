import './App.css';
import Clock from './Clock';
import React, { Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './components/Greeting';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Text from './components/Text';
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import Reviews from './components/Reviews';
import ReviewsEn from './components/ReviewsEn';


function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <div className="App">
      <header className="App-header">

        <div className="right-sidebar">
          <LocaleContext.Provider value={{ locale, setLocale }}>
            <Suspense fallback={<Loading />}>
              <Navigation />
              <Container className="right-sidebar">
                <Greeting />
                <Text />
              </Container>
            </Suspense>
          </LocaleContext.Provider>
        </div>

        <img className='img1' src='https://lionlocs.com/cdn/shop/articles/maxzzerzz-K7mpa6NVWDk-unsplash.jpg?v=1669094485' />
        <Clock />
      </header>

      <main className="App-header">
        <h1>Отзывы</h1>
        {locale === 'en' ? <ReviewsEn /> : <Reviews />}
      </main>
    </div>
  );
}

export default App;
