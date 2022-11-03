import React from "react";

const SampleListComponent = ({ pill }) => {
  return (
    <div>
      <p>{pill.id}</p>
      <p>{pill.name}</p>
    </div>
  );
};

export default SampleListComponent;
