import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME, CONTACT } from "./router";
const HomeComponent = React.lazy(() => import("./pages/home"));
const ContactComponent = React.lazy(() => import("./pages/contact"));

const App = () => {
    return (
          <Router>
            <div>          
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path={CONTACT}>
                     <ContactComponent />,
                  </Route>
                  <Route path={HOME}>
                    <HomeComponent />,
                  </Route>
                </Switch>
              </Suspense>
            </div>
          </Router>
    );
}

export default App;