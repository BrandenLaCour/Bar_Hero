import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { newDate } from "./Utils/Date/Date";
import AppBar from "@material-ui/core/AppBar";

import ReactLoading from "react-loading";
import CheckList from "./Utils/CheckList/CheckList";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import BarIcon from "@material-ui/icons/LocalBar";
import CheckListRowStateful from "./Utils/CheckList/CheckListRowStateful";

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
  main: {
    width: "100%"
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

function Album(props) {
  console.log(props.roomList);
  const { classes } = props;
  const loader = () => (
    <ReactLoading
      type={"spin"}
      color={"#2d5277"}
      height={"35%"}
      width={"35%"}
    />
  );

  const today = newDate();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container direction="row" justify="flex-start">
            <BarIcon className={classes.icon} />
            <Link color="secondary" to="/">
              {" "}
              <Typography variant="h6" color="inherit" noWrap>
                <Link className={classes.links} color="secondary" to="/">
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
              <Link className={classes.links} color="secondary" to="/">
                Home
              </Link>
              <Link
                onClick={props.getUrgent}
                className={classes.links}
                to="urgent"
              >
                Urgent
              </Link>
              <Link className={classes.links} to="/">
                Log Out
              </Link>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              style={{ marginTop: "25px" }}
              paragraph
            >
              {props.roomName}
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container justify="center" direction="row">
            {props.roomList ? (
              <CheckList
                urgent={props.urgentTasks}
                roomList={props.roomList}
                roomName={props.roomName}
                roomId={props.roomId}
                date={today}
              />
            ) : (
              loader()
            )}
          </Grid>
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

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
