import React from "react";

import { Jumbotron, Grid, Row, Col } from "react-bootstrap";
import PreferencesPanel from "./Preferences/PreferencesPanel";
import SystemDetailsPanel from "./SystemDetails/SystemDetailsPanel";
import PlanetDetailsPanel from "./PlanetDetails/PlanetDetailsPanel";
import FaunaDetailsPanel from "./FaunaDetails/FaunaDetailsPanel";

const App = () => (
  <div>
    <Jumbotron>
      <Grid>
        <Col md={12}>
          <h2>No Man's Sky Taxonomy</h2>
        </Col>
        <Col md={12}>
          <h6>
            Based on{" "}
            <a
              href="https://www.odingaming.com/2018/01/15/no-mans-sky-naming-convention/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Odin's Convention
            </a>
          </h6>
        </Col>
      </Grid>
    </Jumbotron>
    <Grid>
      <Row className="show-grid">
        <Col md={12}>
          <PreferencesPanel />
        </Col>
        <Col md={6} lg={4}>
          <SystemDetailsPanel />
        </Col>
        <Col md={6} lg={4}>
          <PlanetDetailsPanel />
        </Col>
        <Col md={6} lg={4}>
          <FaunaDetailsPanel />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;
