import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function AbouMe() {
  return (
    <div className="aboutMe">
      <Card
        className="card"
        sx={{ maxWidth: 475, backgroundColor: "rgb(248, 245, 245)" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="380"
            image="https://telegra.ph/file/2af281deef3dcf570d33c.jpg"
            alt="Beks"
          />
          <CardContent>
            <Typography id="name" gutterBottom variant="h5" component="div">
              Beksultan/JS junior
            </Typography>
            <Typography className="me" variant="body2" color="black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              sed placeat, molestias iure nihil atque error quasi ad quibusdam
              adipisci voluptatem eveniet? Maxime natus voluptatem, sequi facere
              facilis fugit quidem impedit possimus doloribus eligendi sint
              voluptas nihil provident in alias nulla id rerum reiciendis,
              incidunt delectus expedita quas magni necessitatibus culpa.
              Dolorum neque ipsum necessitatibus tempora officiis facere odio
              alias magnam odit? Aliquid placeat quidem nulla veniam veritatis,
              porro alias molestias voluptatum laborum nihil sequi mollitia
              molestiae, id atque voluptatibus magnam iusto quaerat nisi! Libero
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
