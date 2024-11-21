import React from "react";
import Hero from "./hero";
import "../styles/index.sass";

export default function Index(): React.JSX.Element {
  return (
    <main className="index">
      <Hero />
    </main>
  );
}
