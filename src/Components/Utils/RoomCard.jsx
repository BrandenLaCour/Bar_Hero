import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    minWidth: 75
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const checked = true;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Zoom in={checked}>
      <Paper elevation={4} className={classes.paper}>
        <Card className={classes.card}>
          <Grid container justify="center" direction="row">
            <CardContent>
              <img src={props.icon} style={{ width: "100px" }} />
            </CardContent>
          </Grid>
          <Grid container justify="center" direction="row">
            {" "}
            <CardActions>
              <Button size="small">{props.room}</Button>
            </CardActions>
          </Grid>
        </Card>
      </Paper>
    </Zoom>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
