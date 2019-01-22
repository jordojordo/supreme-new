import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>
          1305 B Governor Court, Suite G &bull; Abingdon, MD 21009 &bull; USA
        </dd>
        <dt>Phone</dt>
        <dd>(410) 352-7766</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto: info@supreme-apparel.com">
            info@supreme-apparel.com
          </a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/itsgoodtobeking/"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Supreme Apparel. Design:{' '}
      <a href="https://jordonleach.com">Jordon Leach | Web Development</a>.
    </p>
  </footer>
)

export default Footer
