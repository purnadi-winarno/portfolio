import React from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;