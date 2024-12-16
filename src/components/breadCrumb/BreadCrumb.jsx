import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./breadCrumb.module.scss";
const BreadCrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className={style.breadCrumb}>
      <ul>
        <li>
          <Link to={"/"}>home</Link>
          {pathnames.length > 0 && (
            <span>
              <svg
                width="5"
                height="10"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.51531 5.26536L0.765313 9.01536C0.712867 9.06787 0.646022 9.10363 0.57324 9.11812C0.500458 9.13262 0.425012 9.12519 0.356454 9.09678C0.287895 9.06838 0.229307 9.02027 0.188105 8.95855C0.146903 8.89682 0.124942 8.82426 0.125 8.75005V1.25005C0.124942 1.17584 0.146903 1.10328 0.188105 1.04156C0.229307 0.979835 0.287895 0.931725 0.356454 0.903318C0.425012 0.874911 0.500458 0.867484 0.57324 0.881978C0.646022 0.896472 0.712867 0.932234 0.765313 0.984739L4.51531 4.73474C4.55018 4.76957 4.57784 4.81092 4.59671 4.85645C4.61558 4.90197 4.62529 4.95077 4.62529 5.00005C4.62529 5.04933 4.61558 5.09813 4.59671 5.14365C4.57784 5.18918 4.55018 5.23054 4.51531 5.26536Z"
                  fill="#7C7C7C"
                />
              </svg>  
            </span>
          )}
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to}>
              {isLast ? (
                <span>{decodeURIComponent(value)}</span>
              ) : (
                <>
                  <Link to={to}>{decodeURIComponent(value)}</Link>
                  <span>/</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
