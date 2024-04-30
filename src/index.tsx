import * as React from "react";
import { render } from "react-dom";
import { Spring, config } from "react-spring";

import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
  useCircularInputContext
} from "react-circular-input";

function App() {
  const [value, setValue] = React.useState(0.25);

  return (
    <Grid>
      <CircularInput value={value} onChange={setValue} />

      <CircularInput value={value} onChange={setValue}>
        <CircularTrack />
        <CircularProgress />
      </CircularInput>

      <CircularInput value={value} onChange={setValue}>
        <CircularTrack strokeWidth={5} stroke="#eee" />
        <CircularProgress stroke={`hsl(${value * 100}, 100%, 50%)`} />
      </CircularInput>

      <Spring to={{ value }} config={config.stiff}>
        {props => (
          <CircularInput value={props.value} radius={75} onChange={setValue}>
            <CircularProgress
              strokeWidth={45}
              stroke={`rgba(61, 153, 255, ${props.value})`}
            />
            <CircularThumb
              fill="white"
              stroke="rgb(61, 153, 255)"
              strokeWidth="5"
            />
            <CustomComponent />
          </CircularInput>
        )}
      </Spring>
    </Grid>
  );
}

function Grid({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gridGap: "80px 50px",
        padding: 50,
        fontFamily: "sans-serif"
      }}
    >
      {children}
    </div>
  );
}

function CustomComponent() {
  const { getPointFromValue, value } = useCircularInputContext();
  const point = getPointFromValue();
  if (!point) return null;
  return (
    <text
      {...point}
      textAnchor="middle"
      dy="0.35em"
      fill="rgb(61, 153, 255)"
      style={{ pointerEvents: "none", fontWeight: "bold" }}
    >
      {Math.round(value * 100)}
    </text>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
