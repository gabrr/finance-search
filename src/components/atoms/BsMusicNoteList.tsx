import { SVGProps } from "react";

const BsMusicNoteList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#718096"
      d="M18 19.5c0 1.657-1.68 3-3.75 3-2.07 0-3.75-1.343-3.75-3s1.68-3 3.75-3c2.07 0 3.75 1.343 3.75 3Z"
    />
    <path
      fill="#718096"
      fillRule="evenodd"
      d="M18 4.5v15h-1.5v-15H18Z"
      clipRule="evenodd"
    />
    <path
      fill="#718096"
      d="M16.5 4.23a1.5 1.5 0 0 1 1.206-1.47l4.5-.9A1.5 1.5 0 0 1 24 3.33V6l-7.5 1.5V4.23Z"
    />
    <path
      fill="#718096"
      fillRule="evenodd"
      d="M0 17.25a.75.75 0 0 1 .75-.75H6A.75.75 0 1 1 6 18H.75a.75.75 0 0 1-.75-.75Zm0-6a.75.75 0 0 1 .75-.75H12a.75.75 0 1 1 0 1.5H.75a.75.75 0 0 1-.75-.75Zm0-6a.75.75 0 0 1 .75-.75H12A.75.75 0 1 1 12 6H.75A.75.75 0 0 1 0 5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default BsMusicNoteList;
