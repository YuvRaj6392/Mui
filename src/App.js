import logo from './logo.svg';
import './App.css';
import Muitypo from './components/Muitypo';
import Muibutton from './components/Muibutton';
import MuiTextField from './components/MuiTextField';
import MuiSelect from './components/MuiSelect';
import MuiSelect2 from './components/MuiSelect2';
import MuiCheckBox from './components/MuiCheckBox';
import MuiSwitch from './components/MuiSwitch';
import MuiRating from './components/MuiRating';
import MuiAutocomplete from './components/MuiAutocomplete';
import MuiBox from './components/MuiBox';
import MuiStack from './components/MuiStack';
import MuiGrid from './components/MuiGrid';
import MuiCard from './components/MuiCard';
function App() {
  return (
    <div style={{marginBottom:"100px",marginTop:"50px"}}>
     This is the first page!
     <Muitypo />
     <Muibutton />
     <MuiTextField />
     <MuiSelect />
     <MuiSelect2 />
     <MuiCheckBox />
     <MuiSwitch />
    <MuiRating />
    <MuiAutocomplete />
    <MuiBox />
    <MuiStack />
    <MuiGrid />
    <MuiCard />
    </div>
  );
}

export default App;
