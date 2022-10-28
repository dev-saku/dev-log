import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './page/Main/Main';
import Article from './page/Article/Article';
import { ColorContextProvider } from './provider/ColorThemeProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ColorContextProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />}></Route>
                    <Route path='/article/:id' element={<Article />}></Route>
                </Routes>
            </Router>
        </ColorContextProvider>
    </React.StrictMode>
);
