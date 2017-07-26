import ReactDOM from 'react-dom';
// style
import 'bootstrap/dist/css/bootstrap.css';
import  './assets/css/index.css'

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
