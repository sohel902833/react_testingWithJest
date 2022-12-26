import * as React from "react";
type Props = {
  name?: string;
};
const Greet = ({ name }: Props) => {
  return <div>Hello {name ? name : "Guest"}</div>;
};

export default Greet;
