import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Skills() {
  const [html, setHtml] = React.useState(95);
  const [git, setGit] = React.useState(30);
  const [eng, setEng] = React.useState(70);
  const [rec, setRec] = React.useState(20);
  const [css, setCss] = React.useState(90);
  const [tw, setTw] = React.useState(10);
  const [js, setJs] = React.useState(55);

  return (
    <Box
      className="box"
      sx={{
        marginLeft: "25%",
        width: "50%",
        backgroundColor: "rgb(222, 222, 222)",
        marginTop: "60px",
        height: "100vh",
      }}
    >
      <h1 className="title">Skills</h1>

      <h4>95% HTML</h4>
      <LinearProgress color="inherit" variant="determinate" value={html} />
      <br />
      <br />
      <h4>90% CSS</h4>
      <LinearProgress color="inherit" variant="determinate" value={css} />
      <br />
      <br />
      <h4>70% English</h4>
      <LinearProgress color="inherit" variant="determinate" value={eng} />
      <br />
      <br />
      <h4>55% JavaScript</h4>
      <LinearProgress color="inherit" variant="determinate" value={js} />
      <br />
      <br />
      <h4>40% GIT</h4>
      <LinearProgress color="inherit" variant="determinate" value={git} />
      <br />
      <br />
      <h4>20% React</h4>
      <LinearProgress color="inherit" variant="determinate" value={rec} />
      <br />
      <br />
      <h4>10% TeamWork</h4>
      <LinearProgress color="inherit" variant="determinate" value={tw} />
    </Box>
  );
}
