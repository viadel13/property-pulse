import React from "react";
import type { SVGProps } from "react";

export function AddHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.5 16.5v2q0 .2.15.35T18 19t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 16t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 13t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 16t.15.35t.35.15zM18 21q-2.075 0-3.537-1.463T13 16t1.463-3.537T18 11t3.538 1.463T23 16t-1.463 3.538T18 21M4 17V8q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 1.5t.625.1t.575.3l6.05 4.55q.175.125.263.325t.087.425q0 .425-.288.713T18.6 8.2q-.175 0-.325-.05T18 8l-6-4.5L6 8v9h4q.425 0 .713.288T11 18t-.288.713T10 19H6q-.825 0-1.412-.587T4 17m8-6.75"
      ></path>
    </svg>
  );
}
