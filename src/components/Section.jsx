import React from "react";

const Section = ({ title, children }) => (
  <section style={{ marginBottom: "20px" }}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
