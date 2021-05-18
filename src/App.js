import './App.css';
import {hackerNoonArticles} from './modules/hackerNoonArticles.js'
import {Header} from './modules/header.js'
import {Section} from './modules/section.js'  

function App() {
  let SectionsJSX = MakeSectionsJSX(hackerNoonArticles)
  return <div>
    <Header />
    {SectionsJSX}
  </div>
}

function MakeSectionsJSX(hackerNoonData){
  let keysArray = Object.keys(hackerNoonData);
  let sectionsArray = keysArray.map(sectionKey => {
    return <Section sectionName={sectionKey} sectionData={hackerNoonData[sectionKey]} />
  })
  return sectionsArray;
}

export default App;
