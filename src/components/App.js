import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';


const PageOne = () => {
    return  <div>Home Page
        <div><br/></div>
        <Link to={'/2'}> <button>Page 2</button></Link>
    </div>
}
const PageTwo = () => {
    return <div> Page Two
      <div> <br/></div>
        <Link to = {'/'}><button> Back to Home Page </button></Link>
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
