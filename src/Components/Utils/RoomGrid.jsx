import React from "react";
import { Link } from "react-router-dom";
import RoomCard from "./RoomCard";
import bar from "../../Assets/bar.png";
import dartboard from "../../Assets/dartboard.png";
import gamepad from "../../Assets/gamepad.png";
import bowling from "../../Assets/bowling.png";
import foosball from "../../Assets/foosball.png";
import Grid from "@material-ui/core/Grid";
import { checkPropTypes } from "prop-types";

const RoomGrid = props => {
  const rooms = [
    { roomId: "Lanes", roomName: "Lanes", icon: bowling },
    { roomId: "Mainbar", roomName: "Main Bar ", icon: bar },
    { roomId: "Backbar", roomName: "Back Bar", icon: bar },
    {
      roomId: "Bargames",
      roomName: "Bar Games",
      icon: dartboard
    },
    { roomId: "Vr-room", roomName: "Vr Room", icon: gamepad },
    { roomId: "Patiobar", roomName: "Patio Bar", icon: bar },
    { roomId: "Lobbygames", roomName: "Lobby Games", icon: foosball }
  ];

  return (
    <Grid container spacing={40}>
      {rooms.map(room => (
        <Grid item key={Math.random()} sm={6} md={4} lg={3}>
          <Link to="/room">
            <RoomCard
              roomChoice={() =>
                props.roomChoice({ room: room.roomName, id: room.roomId })
              }
              room={room.roomName}
              icon={room.icon}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default RoomGrid;
