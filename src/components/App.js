import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


const PageOne = () => {
    return <div>One
       <button><a href={'/2'}>2</a></button>
    </div>
}
const PageTwo = () => {
    return <div>Two
        <a href={'/'}>Home</a>
    </div>
}


const App = () => {
    return (
        <div>

            <BrowserRouter>
                <Route path="/" exact component={PageOne}/>
                <Route path="/2" exact component={PageTwo}/>
            </BrowserRouter>

        </div>
    )
}

export default App
