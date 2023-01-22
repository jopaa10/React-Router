import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>Page not faound</p>
      <Link to={"/"}>Back home</Link>
    </section>
  );
};
export default Error;
