import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

function HomeIcon() {
  return (
    <div className="home-icon" id="home">
      <a href="#home">
        <span style={{ color: "#916E30" }}>Win</span>Pick.
      </a>
    </div>
  );
}

function MiddleContent() {
  return (
    <div className="MiddleContent">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <a href="#how">How it works</a>
        </Grid>
        <Grid item xs={3}>
          <a href="#demo">Demo</a>
        </Grid>
        <Grid item xs={3}>
          <a href="#pricing">Pricing</a>
        </Grid>
        <Grid item xs={3}>
          <a href="#aboutus">About Us</a>
        </Grid>
      </Grid>
    </div>
  );
}

function TailContent() {
  return (
    <div className="tail-icon">
      <a href="#contact">Contact Us</a>
    </div>
  );
}

function MenuBar() {
  return (
    <Container className="MenuBar">
      <Grid container spacing={10} justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <HomeIcon />
        </Grid>
        <Grid item xs={7}>
          <MiddleContent />
        </Grid>
        <Grid item xs={2}>
          <TailContent />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MenuBar;
