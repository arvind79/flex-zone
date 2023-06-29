import {Link} from "react-router-dom";

import './notFound.css';

const NotFound = () => {
  return (
    <section className="error">
      <div className="container error__container">
        <h1>404 Page Not Found</h1>
        <Link to={'/'} className="btn">Go Back to Home</Link>
      </div>
    </section>
  )
};

export default NotFound;