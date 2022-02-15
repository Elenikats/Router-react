import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import "./App.css";

function Login() {
  return <p>Login</p>;
}

function Contact() {
  return <p>Contact</p>;
}

function Services() {
  return (
    <div>
      <p>We provide excellent services</p>
      <nav>
        <NavLink to="web">WEB </NavLink> --{" "}
        <NavLink to="server"> SERVER </NavLink>
      </nav>
    </div>
  );
}

function ServicesWeb() {
  return (
    <div>
      <p> Our main services are web services.....</p>
    </div>
  );
}

function ServicesServer() {
  return <p> In addition to web stuff, we also do service maintenance. </p>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <nav>
        <NavLink to="login"> Login </NavLink> --{" "}
        <NavLink to="contact"> Contact </NavLink> --{" "}
        <NavLink to="services"> Services </NavLink>
      </nav>

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />

        <Route path="services">
          <Route index element={<Services />} />
          <Route path="web" element={<ServicesWeb />} />
          <Route path="server" element={<ServicesServer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
