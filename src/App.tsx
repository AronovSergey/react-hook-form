import React from "react";
import { Col, Row } from "react-bootstrap";
import "./App.scss";
import RoutesApp from "./components/Routes/Routes.component";
import Sidebar from "./components/Sidebar/Sidebar.component";

function App() {
  return (
    <Row className="App">
      <Col md={2}>
        <Sidebar />
      </Col>
      <Col md={10} className="container pt-2">
        <RoutesApp />
      </Col>
    </Row>
  );
}
export default App;
