import React from "react";
import Logo from "../common/Logo";
import Container from "../common/Container";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="pt-8 md:pt-16 bg-primary-dark">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Logo isInFooter />
          <p className="text-sm font-medium leading-[1.5] text-background/80 my-2 max-w-[250px]">
            Empowering consumers to make informed choices. Discover honest
            product queries, explore meaningful alternatives, and share your
            voice to build a smarter, more conscious shopping experience.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-background/80">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="text-background/80">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="text-background/80">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="text-background/80">
                Career
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Get Help</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-background/80">
                Forum
              </Link>
            </li>
            <li>
              <Link to="/" className="text-background/80">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="text-background/80">
                Community
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="flex space-x-4">
            <Link href="/" className="text-background/80">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-background/80">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-background/80">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-background/80">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-background/80">
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </Container>
      <Container className="border-t border-border text-center text-background/80 mt-8 pb-4">
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()}, prodwise
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
