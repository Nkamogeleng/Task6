import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Register from './Register.js';
import NotesApp from './NotesApp.js';
import registerx from '../components/API';
// import useToken from '../components/useapp';

function App() {
    // const { token, setToken } = useToken();

    // if (!token) {
    //     return <Register setToken={setToken} />
    // }


    return (
        <div className="wrapper">
            {/* <h1>Welcome to your Software Development notes site</h1> */}

            <BrowserRouter>
             <Register />
                <Switch>
                    {/* <Route path="/">
                       <Register />
                    </Route> */}
                    <Route path='/'>
                        <NotesApp />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )

    registerx();
}

export default App;