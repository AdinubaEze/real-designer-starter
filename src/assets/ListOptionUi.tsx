type IListOptionUi = {
    color?: string;
    width?: number | string;
    height?: number | string;
    background?: string;
    className?: string;
}

const ListOptionUi = ({color,width,height,background,className}:IListOptionUi) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 260 68"
      id="ListOpenDark"
      width={width || "100%"}
      height={height || "100%"}
      filter="none"
      className={className}
    >
      <rect width="259" height="67" x="0.5" y="0.5" fill={background || ""} rx="5.5" />
      <rect width="88" height="4" x="10" y="9" fill={color || "#702dff"} rx="2" />
      <path
        fill={color || "#702dff"}
        d="m243 10.317-2.887 2.887-.825-.825L243 8.667l3.712 3.712-.824.825L243 10.317Z"
      />
      <g fill={color || "#702dff"} opacity="0.2">
        <rect width="49" height="4" x="10" y="27" rx="2" />
        <rect width="37" height="4" x="74" y="27" rx="2" />
        <rect width="28" height="4" x="126" y="27" rx="2" />
        <rect width="56" height="4" x="169" y="27" rx="2" />
        <rect width="25" height="4" x="10" y="40" rx="2" />
        <rect width="49" height="4" x="50" y="40" rx="2" />
        <rect width="26" height="4" x="114" y="40" rx="2" />
        <rect width="49" height="4" x="155" y="40" rx="2" />
        <rect width="37" height="4" x="10" y="53" rx="2" />
        <rect width="78" height="4" x="62" y="53" rx="2" />
        <rect width="48" height="4" x="155" y="53" rx="2" />
      </g>
      <rect width="259" height="67" x="0.5" y="0.5" stroke={color || "#702dff"} rx="5.5" />
    </svg>
  );
};

export default ListOptionUi;
