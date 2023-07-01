import './App.css';


import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Imagens';
import Hooks from './components/Hooks';
import List from './components/List';

function App() {
  return (
   <div className="App">
      <h2>Hello React</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
   </div>
  );
}

export default App;
