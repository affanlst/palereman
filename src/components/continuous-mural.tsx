export function ContinuousMural() {
  return (
    <div className="continuous-mural" aria-hidden="true">
      <div className="mural-desktop" />
      <div className="mural-mobile mural-top" />
      <div className="mural-mobile mural-middle" />
      <div className="mural-mobile mural-bottom" />
      <svg className="mural-connector" viewBox="0 0 390 5000" preserveAspectRatio="none" fill="none">
        <g stroke="currentColor" strokeWidth="1.1">
          <path vectorEffect="non-scaling-stroke" d="M15 0C-60 400 80 620 10 920S-30 1460 22 1790-35 2320 15 2660-25 3250 18 3600-25 4120 5 4540 22 4880 12 5000" />
          <path vectorEffect="non-scaling-stroke" d="M375 0c60 390-50 660 5 1020s-55 580-10 960-35 660 0 980-40 620 7 980-50 680 0 1060" />
        </g>
      </svg>
    </div>
  );
}
