import React, { Fragment } from 'react';
import Triangle from '../Triangle';

const Background = ({ triangles = [] }) => (
  <Fragment>
    {triangles.map((item, index) => {
      const { color, height, width, invertX, invertY } = item;
      return (
        <Triangle
          key={index}
          color={color}
          height={height}
          width={width}
          invertY={invertY}
          invertX={invertX}
        />
      );
    })}
  </Fragment>
);

export default Background;
