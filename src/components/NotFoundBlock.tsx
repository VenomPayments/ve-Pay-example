import React from "react";
import { Link } from "react-router-dom";

const NotFoundBlock: React.FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title title">404 page not found</h1>
      <p className="not-found__descr">
        Sorry, this page does not exist.
        <span>☹️</span>
      </p>
      <Link to="/" className="not-found__button button button_type_primary">
        To main
      </Link>
    </div>
  );
};

export default NotFoundBlock;
