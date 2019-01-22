import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'
import blueShirt from '../assets/images/shirt_blue.jpg'
import orangeShirt from '../assets/images/shirt_orange.jpg'
import psd from '../assets/images/psd_temp.png'
import ai from '../assets/images/ai_temp.png'
import pdf from '../assets/images/pdf_temp.png'
import plastisol from '../assets/images/72.jpg'
import discharge from '../assets/images/22.jpg'
import waterBased from '../assets/images/42.jpg'
import finishes from '../assets/images/52.jpg'
import numbering from '../assets/images/numbering.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Supreme Apparel" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who are we?</h2>
                </header>
                <p>
                  We are a small apparel print-shop for artists and designers,
                  individual teams and rec councils. We can handle everything
                  from printing your unique artwork to simply numbering team
                  shirts. See your vision come to life!
                </p>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Available Sizing</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image">
                  <img src={blueShirt} alt="" />
                </span>
                <h3>Standard</h3>
                <p>
                  Our standard print size is 16 x 16 inches, acheived on our
                  automatic press.
                </p>
              </li>
              <li>
                <span className="image">
                  <img src={orangeShirt} alt="" />
                </span>
                <h3>Maxium</h3>
                <p>
                  Our maximum print size is 16 x 21 inches and is done manually.
                </p>
              </li>
            </ul>
            <ul className="features">
              <li>
                <h3>Custom Jobs</h3>
                <p>
                  If it lays flat and fits on our press pallets we can usually
                  print on it. We've done everything from iPad cases to custom
                  patterned fabric. Just ask.
                </p>
              </li>
              <li>
                <h3>Print Locations</h3>
                <p>
                  Everyone likes something unique. We offer Custom Tag, Sleeve,
                  Over Zipper, Inside-Out, and Over-Pocket printing.
                </p>
              </li>
            </ul>
            <footer className="major" />
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Artwork Guidelines</h2>
              <p>Click on one of the icons below to download a template!</p>
            </header>
            <ul className="statistics">
              <li>
                <span className="icon">
                  <a href="#" download>
                    <img src={psd} alt="" />
                  </a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <a href="#" download>
                    <img src={ai} alt="" />
                  </a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <a href="#" download>
                    <img src={pdf} alt="" />
                  </a>
                </span>
              </li>
            </ul>
            <ul className="features">
              <li>
                <h3>File Prep</h3>
                <p>
                  We accept .AI, .PDF, .EPS, and .PSD files and require them to
                  be submitted on our templates above. Be sure to follow
                  instructions included on the template. Artwork submitted not
                  on our template will be charged $15.
                </p>
              </li>
              <li>
                <h3>Color Guidelines</h3>
                <p>
                  Screen printing requires a separate pass per color therefore
                  we charge per color. We have a standard set of ink colors free
                  of charge and can match.
                </p>
              </li>
              <li>
                <h3>Uploading Files</h3>
                <p>
                  Once you’ve got your artwork on a template e-mail us or use a
                  service such as YouSendIt to send it to us.
                </p>
              </li>
              <li>
                <h3>Turn-Around Time</h3>
                <p>
                  Typical turn around is 7-10 business days from the date of the
                  deposit. If you have a specific due date, let us know and we
                  will make it happen. If items need to be shipped, please allow
                  appropriate time.
                </p>
              </li>
            </ul>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>Ink Styles & Finishes</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image">
                  <img src={plastisol} alt="" />
                </span>
                <h3>Plastisol</h3>
                <p>
                  Cost effective and durable, our high quality plastisol inks
                  will stand up to wear and tear and many washings. Perfect for
                  garments that will get a lot of use. PMS color matching
                  available.
                </p>
              </li>
              <li>
                <span className="image">
                  <img src={discharge} alt="" />
                </span>
                <h3>Discharge Ink</h3>
                <p>
                  Looks and feels great by itself or as an underbase on dark
                  garments. Best on 100% cotton.
                </p>
              </li>
              <li>
                <span className="image">
                  <img src={waterBased} alt="" />
                </span>
                <h3>Water Based</h3>
                <p>
                  Eco friendly and soft to the touch. Great for fashion fit
                  shirts and oversized prints. Works best on white and light
                  colored shirts.
                </p>
              </li>
              <li>
                <span className="image">
                  <img src={finishes} alt="" />
                </span>
                <h3>Finishes</h3>
                <p>
                  From glitter to foil, suade, and crackle, we can print almost
                  every finish under the sun.
                </p>
              </li>
              <li>
                <span className="image">
                  <img src={numbering} alt="" />
                </span>
                <h3>Custom Letters & Numbering</h3>
                <p>
                  Customize and decorate sportswear, team uniforms and spirit
                  wear. Mix and match to create a unique look. Number sizes
                  range from 2 inches to 8 inches in height.
                </p>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Ready for an estimate?</h2>
              <p>
                Every job is different. We want to provide you with the most
                accurate price and make placing the order and easy transition.
                Click on the link below and we will get back to you as quickly
                as we can.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc-UkbgoPSOouItP_hdfspGbqIN5IS7KwGcdqAatJFOSGZ2zA/viewform?usp=sf_link"
                    className="button special"
                    target="blank"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
