
import './App.css';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Header from './Components/Header.js/Header';
import TopContainer from './Components/Header.js/TopContainer/TopContainer';
import SkillContainer from './Components/SkillContainer/SkillContainer';

function App() {
  return (
    <div >
      <Header/>
      <TopContainer />
      <Education />
      <SkillContainer />
      <Contact />


    </div>
  );
}

export default App;
