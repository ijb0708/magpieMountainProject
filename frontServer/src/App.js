import './App.css';
import InvestMenu from './component/InvestMenu';
import TopOnView from './component/TopOnView.js';
import KoreaArea from './component/KoreaArea';
import InputSearch from './component/InputSearch';

function App() {
  return (
    <div className="App">
      <TopOnView></TopOnView>
      <InvestMenu ></InvestMenu>
      <KoreaArea></KoreaArea>
      <InputSearch></InputSearch>
    </div>

  );
}

export default App;
