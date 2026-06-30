import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-vintage-dark border-t border-vintage-bronze/10 py-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl tracking-[0.3em] text-vintage-gold">
              Neirah
            </h2>

            <p className="font-sans text-xs tracking-widest text-vintage-muted mt-3 leading-6">
              Hand-developed with silver & light.
              <br />
              Capturing timeless moments through photography.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="text-vintage-muted hover:text-vintage-gold transition"
              >
                <FaInstagram size={18}/>
              </a>

              <a
                href="#"
                className="text-vintage-muted hover:text-vintage-gold transition"
              >
                <FaFacebookF size={18}/>
              </a>

              <a
                href="#"
                className="text-vintage-muted hover:text-vintage-gold transition"
              >
                <FaWhatsapp size={18}/>
              </a>

            </div>

          </div>



          {/* Navigation */}
          <div>

            <h3 className="font-serif text-sm tracking-widest text-vintage-gold uppercase mb-5">
              Explore
            </h3>

            <ul className="space-y-3 text-[11px] tracking-widest uppercase font-sans text-vintage-muted">

              <li>
                <a className="hover:text-vintage-gold transition" href="#">
                  Home
                </a>
              </li>

              <li>
                <a className="hover:text-vintage-gold transition" href="#">
                  Portfolio
                </a>
              </li>

              <li>
                <a className="hover:text-vintage-gold transition" href="#">
                  About Us
                </a>
              </li>

              <li>
                <a className="hover:text-vintage-gold transition" href="#">
                  Contact
                </a>
              </li>

            </ul>

          </div>



          {/* Services */}
          <div>

            <h3 className="font-serif text-sm tracking-widest text-vintage-gold uppercase mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-[11px] tracking-widest uppercase font-sans text-vintage-muted">

              <li>Wedding Photography</li>

              <li>Portrait Sessions</li>

              <li>Event Coverage</li>

              <li>Creative Shoots</li>

            </ul>

          </div>



          {/* Contact */}
          <div>

            <h3 className="font-serif text-sm tracking-widest text-vintage-gold uppercase mb-5">
              Contact
            </h3>


            <div className="space-y-4 text-[11px] tracking-widest uppercase text-vintage-muted">

              <div className="flex gap-3 items-center">
                <MapPin size={15}/>
                <span>
                  Colombo, Sri Lanka
                </span>
              </div>


              <div className="flex gap-3 items-center">
                <Phone size={15}/>
                <span>
                  +94 72 303 7869
                </span>
              </div>


              <div className="flex gap-3 items-center">
                <Mail size={15}/>
                <span>
                  hello@neirah.com
                </span>
              </div>


            </div>

          </div>


        </div>



        {/* Divider */}
        <div className="border-t border-vintage-bronze/10 pt-8">


          <div className="flex flex-col md:flex-row justify-between items-center gap-5">


            <p className="font-sans text-[10px] tracking-[0.25em] text-vintage-muted uppercase">
              © {new Date().getFullYear()} NEIRAH PHOTOGRAPHY. ALL RIGHTS RESERVED.
            </p>



            <div className="flex gap-4 text-[10px] tracking-widest uppercase text-vintage-muted">

              <a 
                href="#"
                className="hover:text-vintage-gold transition"
              >
                Privacy Policy
              </a>


              <span>/</span>


              <a 
                href="#"
                className="hover:text-vintage-gold transition"
              >
                Terms of Craft
              </a>


            </div>


          </div>


        </div>


      </div>


    </footer>
  );
}