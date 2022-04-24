import * as React from "react";

export const Polygon = () => (
  <svg width={17} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m8.5 0 8.227 14.25H.273L8.5 0Z" fill="#C4C4C4" />
  </svg>
);

export const PolygonDown = () => (
  <svg width={17} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 15 .273.75h16.454L8.5 15Z" fill="#C4C4C4" />
  </svg>
);

export const SmallStar = ({ width = 30, height = 30 }) => (
  <svg width={width} height={height} fill="none" style={{ marginTop: 5 }}>
    <path
      d="m7.5 0 1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0Z"
      fill="#FFC700"
    />
  </svg>
);
