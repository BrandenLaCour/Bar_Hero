import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ReactLoading from "react-loading";
import { newDate } from "./Utils/Date/Date";
import AppBar from "@material-ui/core/AppBar";
import UrgentList from "./Utils/CheckList/UrgentList";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import BarIcon from "@material-ui/icons/LocalBar";

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
    padding: `${theme.spacing.unit * 8}px 0`,
    width: "100vw",
    marginLeft: "100px",
    marginRight: "100px"
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
  const { classes } = props;
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
              <Link className={classes.links} to="urgent">
                Urgent
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
              variant="h4"
              align="center"
              color="textSecondary"
              style={{ marginTop: "25px" }}
              paragraph
            >
              {props.urgentTasks.length > 0
                ? "Urgent Tasks"
                : "No Urgent Tasks"}
            </Typography>

            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              style={{ marginTop: "25px" }}
              paragraph
            />
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container justify="center" direction="row">
            {
              <UrgentList
                urgentList={props.urgentList}
                urgentTasks={props.urgentTasks}
                deleteUrgent={props.deleteUrgent}
                images={props.images}
                getUrgentList={props.getUrgentList}
                deleteAndRefresh={props.deleteAndRefresh}
              />
            }
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
