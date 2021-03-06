import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { newDate } from "./Utils/Date/Date";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import RoomGrid from "./Utils/RoomGrid";
import BarIcon from "@material-ui/icons/LocalBar";
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

function Home(props) {
  const { classes } = props;
  const today = newDate();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container direction="row" justify="flex-start">
            <BarIcon className={classes.icon} />
            <Link color="secondary" to="/home">
              {" "}
              <Typography variant="h6" color="inherit" noWrap>
                <Link className={classes.links} color="secondary" to="/home">
                  Bar Hero
                </Link>
              </Typography>
            </Link>
          </Grid>
          <Grid container direction="row" justify="center">
            <Typography variant="h7" color="inherit" noWrap>
              {today}
              {/* use a library to get the date and read it out regular */}
            </Typography>
          </Grid>

          <Grid container direction="row" justify="flex-end">
            <Typography variant="h6" color="inherit" noWrap>
              <Link className={classes.links} color="secondary" to="/home">
                Home
              </Link>
              <Link
                // onClick={props.getUrgent}
                className={classes.links}
                to="/"
              >
                Urgent
              </Link>
              <Link onClick={props.logOut} className={classes.links} to="/">
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
              Welcome {props.userName}, please choose a room to get started
            </Typography>
            <Typography
              variant="h8"
              align="center"
              color="textSecondary"
              paragraph
            >
              Remember to upload, pick a status, and write notes before checking
              the box.
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <RoomGrid roomChoice={props.room} />
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom />
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          © 2019 , Bar Hero created by Branden LaCour
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
