import './App.css';
import InvestMenu from './component/InvestMenu';
import TopOnView from './component/TopOnView.js';
import KoreaArea from './component/KoreaArea';
import InputSearch from './component/InputSearch';
import ShowTestData from './component/ShowTestData';

function App() {
  return (
    <div className="App">
      <TopOnView></TopOnView>
      <InvestMenu ></InvestMenu>
      <KoreaArea></KoreaArea>
      <InputSearch></InputSearch>
      <ShowTestData></ShowTestData>
    </div>

  );
}

export default App;
