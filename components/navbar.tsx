function Navbar() {
  return (
		<div className="navbar bg-background">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<div>
						<li>
							<a>About me</a>
						</li>
					</div>
					<div>
						<li>
							<a>Pricing</a>
						</li>
					</div>
					<li>
						<details>
							<summary>Parent</summary>
							<ul className="bg-background rounded-t-none p-2">
								<li>
									<a>Link 1</a>
								</li>
								<li>
									<a>Link 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<input type="checkbox" value="synthwave" className="toggle theme-controller" />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar