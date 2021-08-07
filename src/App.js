import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Progress from "./components/Progress";
import Button from './components/Button';
import { saveStateToLS, state, updateMutability, isStartupFinished } from './store';
import axios from 'axios';
import Message from './components/Message';

function App() {
  const [progressState, setProgressState] = useState(state);
  const [isFinishedState, setIsFinishedState] = useState(false);
  const [randomFact, setRandomFact] = useState(null);

  useEffect(() => {
    isStartupFinished(progressState) && setIsFinishedState(true)}, [progressState]);

  const toggleItem = (sectionId, itemId) => {
    const itemClicked = progressState.find(section => section.id === sectionId).items.find(item => item.id === itemId);
    itemClicked.isFinished = !itemClicked.isFinished;

    updateMutability(progressState);
    saveStateToLS(progressState);
    setProgressState([...progressState]);
    isStartupFinished(progressState) && setIsFinishedState(true);
  }

  const getRandomFact = async () => {
    try {
      const response =  await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
      setRandomFact(response.data.text);
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  const resetLS = () => {
    localStorage.removeItem('startupProgress')
    window.location.reload()
  }

  return (
    <div className="container">
      <Header title='My Start Up Progress'/>
      <Progress progress={progressState} itemChange={toggleItem}/>
      <Button text='Reset Local Storage' color='black' onClick={resetLS}/>
      { isFinishedState ? <Button text='Show random fact!' color='#466eb4' onClick={getRandomFact} /> : ''}
      { randomFact && <Message text={randomFact} /> }
    </div>
  );
}

export default App;
