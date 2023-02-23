import './App.css';
import ProfileName from './components/ProfileName';
import ProfilePic from './components/ProfilePic';

function App() {
  return (
    <div className="App">
      <ProfileName 
      name="Sander"/>
      <ProfilePic 
      altText="blobby"/>
    </div>
  );
}

export default App;
