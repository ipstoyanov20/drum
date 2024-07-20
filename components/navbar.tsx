"use client";
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Simple modal component for the menu
  const MenuModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10">
      <div className="bg-white rounded-lg p-5">
        <ul className="menu menu-vertical">
          <li><a href="#">About me</a></li>
          <li><a href="#">Pricing</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-background rounded-t-none p-2">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
              </ul>
            </details>
          </li>
          <li>
            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
          </li>
        </ul>
        <button className="btn btn-primary mt-4" onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  );

  return (
		<div className="navbar flex flex-row justify-between bg-background">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>
			<div className="flex-none">
				<button
					className="btn btn-square btn-ghost lg:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>

				<ul className="menu menu-horizontal px-1 hidden lg:flex">
					<li>
						<a>Link</a>
					</li>
					<li>
						<details>
							<summary>Parent</summary>
							<ul className="bg-base-100 rounded-t-none p-2">
								<li>
									<a>Link 1</a>
								</li>
								<li>
									<a>Link 2</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
			{isOpen && <MenuModal />}
		</div>
	);
}

export default Navbar;