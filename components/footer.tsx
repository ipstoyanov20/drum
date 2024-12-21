import logo from '../public/logo.png';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
		<footer className="footer bg-background relative p-10 m-0 text-[#B59861]">
			<aside>
				<Image
					src={logo}
					alt="logo"
					style={{ width: "50px", height: "50px" }}
					className="z-0"
				/>
				<p>
					BG drummer <span className="text-xl">&reg;</span>
					<br />
					All rights reserved &copy; 2024
				</p>
			</aside>

			<nav className="grid grid-cols-1">
				<div>
					<h6 className="footer-title">Contact</h6>
					<p className="footer-title opacity-100">bgdrummer@bgdrummer.com</p>
				</div>
				<div>
					<h6 className="footer-title">Social</h6>
					<div className="grid grid-flow-col gap-0 -translate-x-5">
						<a
							href="https://www.tiktok.com/@bg_drummer"
							target="_blank"
							className="social"
						>
							<FontAwesomeIcon icon={faTiktok} size="2x" />
						</a>
						<a
							href="https://www.instagram.com/bg_drummer"
							target="_blank"
							className="social"
						>
							<FontAwesomeIcon icon={faInstagram} size="2x" />
						</a>
            <a href="mailto:bgdrummer@bgdrummer.com" className="social">
							<FontAwesomeIcon icon={faEnvelope} size="2x" />
						</a>
					</div>
				</div>
			</nav>
		</footer>
	);
}

export default Footer;