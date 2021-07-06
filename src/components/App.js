import React from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";


const App = () => {
    return (
        /*use "exact" keyword with Router*/
        <div>
           <Header></Header>
            <BrowserRouter>
              <div>
                  <Route path={"/"} exact component={StreamList}/>
                  <Route path={"/streams/new"} exact component={StreamCreate}/>
                  <Route path={"/streams/edit"} exact component={StreamEdit}/>
                  <Route path={"/streams/delete"} exact component={StreamDelete}/>
                  <Route path={"/streams/show"} exact component={StreamShow}/>
              </div>
            </BrowserRouter>

        </div>
    )
}

export default App
