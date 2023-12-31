import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About/index.js';
import Nav from './components/Nav/index.js';
import Gallery from './components/Gallery/index.js';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);


  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
         categories={categories}
         setCurrentCategory={setCurrentCategory}
         currentCategory={currentCategory}
         contactSelected={contactSelected}
         setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {!contactSelected ? (
            <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
