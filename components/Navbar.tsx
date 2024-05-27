import { faCog, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Navbar = () => (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <Link className="btn btn-ghost text-xl" href="/">
        10k sentence journey
      </Link>
    </div>
    <div className="navbar-center"></div>
    <div className="navbar-end">
      {/*
      <button className="btn btn-ghost btn-circle">
        <FontAwesomeIcon icon={faCog} className="h-5 w-5" />
</button>*/}
      <Link className="btn btn-ghost btn-circle" href="words">
        <FontAwesomeIcon icon={faListAlt} className="h-5 w-5" />
      </Link>
    </div>
  </div>
);
