import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum</p>

        <p>Vrni se na <Link to="/">Prvo strani</Link>.</p>
    </div>
  )
};