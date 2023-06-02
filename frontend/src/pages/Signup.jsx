export const Signup = () => {
	return (
		<>
			<section className="container">
				<h1>Create an Account</h1>
				<form action="#" method="POST">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" required/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" required/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" required/>
					</div>
					<div className="form-group">
						<label htmlFor="confirm-password">Confirm Password</label>
						<input type="password" id="confirm-password" name="confirm-password" required/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn">Sign Up</button>
					</div>
				</form>
				<p>Already have an account? <a href="login.html">Log in</a></p>
			</section>
		</>
	)
}