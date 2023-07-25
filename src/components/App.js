import React from "react";
import Register from "./Register"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "./ForgotPassword";

function App() {
  return(
      <Container className="d-flex align-items-center justify-content-center"
        style={{minHeight:"100vh"}}>
      <div className="w-100" style={{maxWidth:"400px"}}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route exact path='/verify' Component={ProtectedRoute}>
                <Route exact path='/verify' Component={Dashboard}/>
              </Route>
              <Route path='/register' Component={Register} />
              <Route path='/login' Component={Login} />
              <Route path='/forgotPassword' Component={ForgotPassword} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
     </Container>

  ) ;
}

export default App;
