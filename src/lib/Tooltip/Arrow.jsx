import React from 'react'; //

const Arrow = ({
  isHovered,
  hovBkg,
  bkgCol,
  flat
}) => {
  const backgroundColor = isHovered ? hovBkg : bkgCol;
  const boxShadow = flat ? null : '0 0 0 1px rgba(0,0,0,.18)';

  return (
    <div
      className="rpt-arrow"
      style={{
        backgroundColor,
        boxShadow
      }}
    />
  );
};

export default Arrow;
