import { Link } from "gatsby"
import React from "react"
import logo from "../images/huda.png"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LEFT */}
            <div>
              <img
                className="max-h-28 max-w-xs"
                src={logo}
                alt="Huda"
              />

              <p className="text-black opacity-70 text-sm mt-5">
                Al Miftahul Huda
              </p>

              {/* LOKASI (KLIK) */}
              <a
                href="https://www.google.com/maps?q=Al Miftahul Huda,+Jambu+Karya,+Rajeg,+Tangerang,+Banten+15540"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black text-sm mt-2 hover:underline"
              >
                📍 Lokasi:
                <br />
                Al Miftahul Huda, Jambu Karya,
                <br />
                Rajeg, Tangerang, Banten 15540
              </a>

              {/* GOOGLE MAPS (KLIK JUGA) */}
              <a
                href="https://www.google.com/maps?q=VF99+JHC,+Jambu+Karya,+Rajeg,+Tangerang,+Banten+15540"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-2 rounded-lg overflow-hidden shadow-md cursor-pointer">
                  <iframe
                    title="Lokasi Al Miftahul Huda"
                    src="https://www.google.com/maps?q=VF99+JHC,+Jambu+Karya,+Rajeg,+Tangerang,+Banten+15540&output=embed"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </a>

              {/* EMAIL */}
              <div className="mt-5">
                <a
                  href="mailto:almiftahulhuda@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-5 h-5"
                    src="/img/gmail.png"
                    alt="Al Miftahul Huda Email"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium text-black space-y-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
