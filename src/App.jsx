import React from 'react'
import Card from './Components/Card';
import './App.css'
import NavCard from './Components/NavCard';
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero';
import { assests } from './assets/assets.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const demos = [
    { title: 'Aris (shopping List)', subtitle: 'I am a web designer', images: assests.portfolio1, link: 'https://calm-quokka-9028e9.netlify.app/'},
    { title: 'Aris (Todo list)', subtitle: 'I am a web developer', images: assests.portfolio2, link: 'https://musical-pony-5be72a.netlify.app/' },
    { title: 'Aris (Two steps info)', subtitle: 'I create beautiful websites', images: assests.portfolio3, link:'https://zesty-crisp-491624.netlify.app/'},
    { title: 'Aris (palindrome)', subtitle: 'With RTL support', images: assests.portfolio4, link: 'https://sparkly-sopapillas-750d35.netlify.app/'  },
    { title: 'Aris (Chuck Noris Jokes)', subtitle: 'I am a web developer', images: assests.portfolio5, link:'https://thriving-fenglisu-7a85c6.netlify.app/'  },
    { title: 'Aris (Submit click)', subtitle: 'I am a web developer', images: assests.portfolio6, link:'https://friendly-faloodeh-8a606c.netlify.app/' },
    { title: 'Aris (Calculator)', subtitle: 'I am a web developer', images: assests.portfolio7, link:'https://comforting-entremet-df20d1.netlify.app/' }, 
    { title: 'Aris (Food website)', subtitle: 'I am a web developer', images: assests.portfolio8, link:'https://musical-alfajores-03fa1b.netlify.app/' }
  ];

  return (
    <Router>
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
            images={demo.images}
            link={demo.link}
          
          />
        ))}
      </div>
    </div>
    </Router>
  );
}

export default App;
