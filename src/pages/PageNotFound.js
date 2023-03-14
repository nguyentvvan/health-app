import { NavLink } from "react-router-dom";

export default function PageNotFound() {
	return (
		<div className="content-wrapper py-5 min-vh-50">
			<div className="row justify-content-center">
				<div className="col-md-12 text-center">
					<span className="display-1 d-block">404</span>
					<div className="mb-4 lead">The page you are looking for was not found.</div>
					<NavLink exact to="/" className="btn btn-link">
						Back to Home
					</NavLink>
				</div>
			</div>
    </div>
	)
}
