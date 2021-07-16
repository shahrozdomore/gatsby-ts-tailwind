import React from "react";

type Props = {
  name?: string;
};

const Header = ({ name }: Props) => (
  <div>
    <h1>Header</h1>
  </div>
);

export default Header;
