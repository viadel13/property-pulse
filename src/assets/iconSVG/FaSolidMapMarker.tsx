import React from "react";
import type { SVGProps } from "react";

export function FaSolidMapMarker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={384}
      height={512}
      viewBox="0 0 384 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67c-9.535 13.774-29.93 13.773-39.464 0"
      ></path>
    </svg>
  );
}
