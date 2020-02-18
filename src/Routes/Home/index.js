import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Star Wars</h1>
      <Link to="/characters">click me</Link>
    </div>
  );
}
