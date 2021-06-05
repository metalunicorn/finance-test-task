import {CContent} from './componets/finance'
import './App.css';
import {Provider} from 'react-redux'
import {store} from './store/index'



const App = () => <Provider store={store}><CContent/></Provider>


export default App;
