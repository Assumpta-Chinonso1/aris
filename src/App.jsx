import React from 'react'
import Card from './Components/Card';
import './App.css'
import NavCard from './Components/NavCard';
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero';

function App() {
  const demos = [
    { title: 'Aris (Light Demo)', subtitle: 'I am a web designer'},
    { title: 'Aris (Dark Demo)', subtitle: 'I am a web developer' },
    { title: 'Aris (With BG Image)', subtitle: 'I create beautiful websites'},
    { title: 'Aris (Arabic)', subtitle: 'With RTL support' },
    { title: 'Aris (Dark Demo)', subtitle: 'I am a web developer' }
  ];

  return (
    <div className="App">
       
     
      <Navbar/>
      <Hero/>
      <NavCard/>
      <div className="cards-container">
        {demos.map((demo, index) => (
          <Card
            key={index}
            title={demo.title}
            subtitle={demo.subtitle}
          
          />
        ))}
      </div>
    </div>
  );
}

export default App;
