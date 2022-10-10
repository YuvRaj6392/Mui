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
import MuiAccordion from './components/MuiAccordion';
import MuiNavbar from './components/MuiNavbar';
import MuiLink from './components/MuiLink';
import MuiBreadCrums from './components/MuiBreadCrums';
import MuiDrawer from './components/MuiDrawer';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiBottomNavigation from './components/MuiBottomNavigation';
import MuiAvatar from './components/MuiAvatar';
import MuiBadge from './components/MuiBadge';
import MuiList from './components/MuiList';
import MuiChips from './components/MuiChips'
import MuiToolTip from './components/MuiToolTip';
import MuiTable from './components/MuiTable';
import MuiAlert from './components/MuiAlert';
import MuiSnackBar from './components/MuiSnackBar';
import MuiDialog from './components/MuiDialog';
import MuiProgress from './components/MuiProgress';
import MuiSkeleton from './components/MuiSkeleton';
import MuiLoading from './components/MuiLoading';
import MuiTabs from './components/MuiTabs';
import MuiTimeline from './components/MuiTimeline';
import MuiMasonry from './components/MuiMasonry';
function App() {
  return (
    <div style={{marginBottom:"100px",marginTop:"50px"}}>
     This is the first page!
     <MuiSkeleton />
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
    <MuiAccordion />
    {/* ImageListItemBar is really important */}
    <MuiNavbar />
    <MuiLink />
    <MuiBreadCrums />
    <MuiDrawer />
    <MuiSpeedDial />
    <MuiBottomNavigation />
    <MuiAvatar />
    <MuiBadge />
    <MuiList />
    <MuiChips />
    <MuiToolTip />
    <MuiTable />
    <MuiAlert />
    <MuiSnackBar />
    <MuiDialog />
    <MuiProgress />
    <MuiLoading /> 
    <MuiTabs />
    <MuiTimeline />
    <MuiMasonry />
    
    </div>
  );
}

export default App;
