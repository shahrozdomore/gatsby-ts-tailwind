import React from "react";

type Props = {
  name?: string;
};

const NotFoundPage = ({ name }: Props) => (
  <div>
    <h1>404 - Not Found</h1>
  </div>
);

export default NotFoundPage;
