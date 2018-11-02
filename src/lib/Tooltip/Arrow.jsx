import React from 'react'; //

const Arrow = ({
  moveRight,
  moveLeft,
  isHovered,
  hoverBackground,
  backgroundColor,
  flat,
  zIndex,
  position }) => {
  const backgroundAdj = isHovered
    ? hoverBackground : backgroundColor;

  const boxShadow = flat ? null : '0 0 0 1px rgba(0,0,0,.18)';

  let marginLeft;
  let marginRight;

  if (position.isSide('top') || position.isSide('bottom')) {
    marginLeft = `${moveRight}px`;
    marginRight = `${moveLeft}px`;
  }

  return (
    <div
      className="tpArrow"
      style={{
        marginLeft,
        marginRight,
        backgroundColor: backgroundAdj,
        boxShadow,
        zIndex: zIndex + 1 || '101'
      }}
    />
  );
};

export default Arrow;
