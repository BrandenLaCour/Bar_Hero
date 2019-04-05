import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import RoomCard from "./Utils/RoomCard";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import bar from "../Assets/bar.png";
import dartboard from "../Assets/dartboard.png";
import gamepad from "../Assets/gamepad.png";
import bowling from "../Assets/bowling.png";
import foosball from "../Assets/foosball.png";
import Button from "@material-ui/core/Button";
import BarIcon from "@material-ui/icons/LocalBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    position: "fixed"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  links: {
    padding: "10px",
    color: "white"
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const rooms = [
  { roomName: "lanes", icon: bowling },
  { roomName: "main bar ", icon: bar },
  { roomName: "back bar", icon: bar },
  { roomName: "bar games", icon: dartboard },
  { roomName: "vr room", icon: gamepad },
  { roomName: "patio bar", icon: bar },
  { roomName: "patio games", icon: foosball }
];

function Home(props) {
  const { classes } = props;
  const date = new Date();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container direction="row" justify="flex-start">
            <BarIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Bar Hero
            </Typography>
          </Grid>
          <Grid container direction="row" justify="center">
            <Typography variant="h7" color="inherit" noWrap>
              Today's date is {date.getDate()}, {date.getDay()},{" "}
              {date.getFullYear()}
              {/* use a library to get the date and read it out regular */}
            </Typography>
          </Grid>

          <Grid container direction="row" justify="flex-end">
            <Typography variant="h6" color="inherit" noWrap>
              <Link className={classes.links} color="secondary" to="/home">
                Home
              </Link>
              <Link className={classes.links} to="logs">
                Logs
              </Link>
              <Link className={classes.links} to="/">
                Log Out
              </Link>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              style={{ marginTop: "25px" }}
              paragraph
            >
              Welcome {"Branden"}, please choose a room to get started. {".."}
              {"Any news messages will go here"}
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {rooms.map(room => (
              <Grid item key={Math.random()} sm={6} md={4} lg={3}>
                <RoomCard room={room.roomName} icon={room.icon} />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
