import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Typography,
} from "@material-tailwind/react";

const Pagination = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" placeholder="">
      <nav className="flex">
        <Link to="/" onClick={() => navigate("/")}> Home </Link>
        {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <React.Fragment key={index}>
                <span className="px-1">/</span>
                <Link to={routeTo} onClick={() => navigate(routeTo)}>{name}</Link>
              </React.Fragment>
            );
        })}
      </nav>
    </MuiBreadcrumbs>
  );
};

export default Pagination;
