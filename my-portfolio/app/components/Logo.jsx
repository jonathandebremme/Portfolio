"use client";

import { useEffect, useState } from "react";

export default function Logo({ width, height }) {
  const [imgWidth, setImgWidth] = useState("75");
  const [imgHeight, setImgHeight] = useState("75");

  useEffect(() => setImgWidth(width), [width]);
  useEffect(() => setImgHeight(height), [height]);
  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={imgWidth}
        height={imgHeight}
        viewBox="0 0 192.000000 192.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,192.000000) scale(0.100000,-0.100000)"
          fill="currentcolor"
          stroke="none"
        >
          <path
            d="M1415 1334 c-16 -3 -60 -14 -98 -25 l-67 -20 2 -331 3 -331 55 -19
	   c79 -28 263 -35 354 -14 130 31 181 82 181 182 0 75 -33 131 -94 161 l-40 20
	   37 24 c52 34 74 81 69 151 -5 81 -38 128 -120 168 -56 27 -77 32 -158 35 -52
	   2 -107 1 -124 -1z m159 -236 c9 -12 16 -28 16 -36 0 -22 -48 -62 -75 -62 -24
	   0 -25 3 -25 53 0 30 3 57 7 60 15 16 62 6 77 -15z m-20 -208 c59 -22 36 -110
	   -29 -110 l-35 0 0 60 c0 65 8 72 64 50z"
          />
          <path
            d="M396 1323 l-49 -4 7 -87 c19 -248 19 -287 2 -344 -10 -37 -24 -61
	   -41 -72 -38 -25 -101 -20 -160 13 l-52 29 -16 -101 c-17 -116 -19 -112 63
	   -150 34 -16 66 -21 135 -21 82 -1 95 2 143 28 60 34 101 80 134 152 20 44 22
	   69 26 243 2 107 1 223 -3 258 l-7 63 -66 -2 c-37 -1 -89 -3 -116 -5z"
          />
          <path
            d="M755 1313 c-16 -2 -46 -8 -66 -14 l-36 -9 -6 -232 c-4 -128 -7 -284
	   -7 -345 l0 -113 98 0 c172 0 295 44 382 136 66 69 91 129 97 230 10 153 -41
	   252 -161 314 -63 32 -75 35 -170 36 -55 1 -114 0 -131 -3z m219 -243 c57 -56
	   42 -192 -27 -244 -43 -33 -72 -37 -70 -11 0 11 4 82 8 158 l7 139 27 -7 c14
	   -3 39 -19 55 -35z"
          />
        </g>
      </svg>
    </div>
  );
}
