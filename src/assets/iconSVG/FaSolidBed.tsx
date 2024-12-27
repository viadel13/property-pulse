import React from "react";
import type { SVGProps } from "react";

export function FaSolidBed(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={640}
      height={512}
      viewBox="0 0 640 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80s-80 35.89-80 80s35.89 80 80 80m352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112"
      ></path>
    </svg>
  );
}