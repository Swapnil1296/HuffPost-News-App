import { Link } from "react-router-dom"
import "./PageNotFound.css"

export const PageNotFound = () => {

    return <div className="page-not-found">
        <h1>404</h1>
        <p>Page Not Found!</p>
        <Link to={"/"}>
            <button>TAKE ME TO THE FRONT PAGE</button>
        </Link>
    </div>
}