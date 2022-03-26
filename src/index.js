import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/routers/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css'
import './i18next'




ReactDOM.render(
    <Suspense fallback={(<div>Loading... </div>)}>
        <AppRouter/>
    </Suspense>, 
document.getElementById('root'));

