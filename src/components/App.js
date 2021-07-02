import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


const PageOne = () => {
    return  <div>Home Page
        <div><br/></div>
        <a href={'/2'}> <button>Page 2</button></a>
    </div>
}
const PageTwo = () => {
    return <div> Page Two
      <div> <br/></div>
        <a href={'/'}><button> Back to Home Page </button></a>
    </div>
}


const App = () => {
    return (
        /*use "exact" keyword with Router*/
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne}/>
                <Route path="/2" exact component={PageTwo}/>
            </BrowserRouter>

        </div>
    )
}

export default App
