import { Link } from "react-router-dom"
function Error () {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default Error