export default function Logo({
  color = "#17171A",
  background = "#E5B13A",
  className,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {background && <rect width="40" height="40" fill={background} />}
      <g fill={color}>
        <path d="M0 2.6795A20 20 0 0 1 30 20H20A10 10 0 0 0 0 20Z" />
        <path d="M40 37.3205A20 20 0 0 1 10 20H20A10 10 0 0 0 40 20Z" />
        <circle cx="35" cy="5" r="5" />
      </g>
    </svg>
  );
}
