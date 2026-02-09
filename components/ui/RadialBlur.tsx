import React from "react";

export default function RadialBlur({ className }: { className?: string }) {
  return (
    <svg
      width="748"
      height="796"
      viewBox="0 0 748 796"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_2695_3276)">
        <circle cx="340" cy="388" r="208" fill="#DAE4FD" />
      </g>
      <defs>
        <filter
          id="filter0_f_2695_3276"
          x="-68"
          y="-20"
          width="816"
          height="816"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_2695_3276"
          />
        </filter>
      </defs>
    </svg>
  );
}
