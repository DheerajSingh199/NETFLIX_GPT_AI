import { Provider } from 'react-redux';
import Body from './components/Body.js';
import appStore from './utils/appstore.js';
function App() {
  return (
    <>
    <Provider store={appStore}><Body/></Provider>
    </>
  );
}
 
export default App;
