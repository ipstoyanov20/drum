import logo from '../public/logo.png';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
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
      BG Drummer
      <br />
      All rights reserved &copy; 2024
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-0 -translate-x-5">
    <a
          href="https://www.tiktok.com/@stoyanoviv"
          target='_blank'
          className="social"
          >
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          target='_blank'
          className="social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
  </nav>
</footer>  )
}

export default Footer