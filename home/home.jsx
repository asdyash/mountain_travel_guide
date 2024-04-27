import React, { useState, useEffect } from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import m1 from "../assets/mountain1.jpg";
import m5 from "../assets/mountain5.jpg";
import m6 from "../assets/mountain6.jpg";
// import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";
import "../home/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const backgroundImages = [`url(${m1})`, `url(${m5})`, `url(${m6})`];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header
        className="header"
        id="home"
        style={{ backgroundImage: backgroundImages[bgImageIndex] }}
      >
        <nav>
          <div className="nav__bar">
            <div className="logo nav__logo">
              <a href="#">SummitSeeker Adventures</a>
            </div>
            <ul className="nav__links" id="nav-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#equipment">Equipment</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="nav__menu__btn" id="menu-btn">
              <i className="ri-menu-line"></i>
            </div>
            <div className="nav__action__btn">
              <button className="btn">
                <span>
                  <FaUser />
                </span>{" "}
                Account
              </button>
            </div>
          </div>
        </nav>
        {/* nav ends */}
        <div className="section__container header__container">
          <div className="header__content">
            <h3 className="section__subheader">A HIKING GUIDE</h3>
            <h1 className="section__header">
              Peak Adventures Await: Your Ultimate Mountain Escape!
            </h1>
            <div className="scroll__btn">
              <a href="#about" aria-label="Scroll down">
                Scroll down
                <span>
                  <FaArrowDownLong />
                </span>
              </a>
            </div>
          </div>
          <div className="header__socials">
            <span>Follow us</span>
            <a href="#">
              <FiInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </header>
      <div>
        <section class="about">
          <div class="section__container about__container">
            <div class="about__image about__image-1" id="about">
              <img src={about1} alt="about" />
            </div>
            <div class="about__content about__content-1">
              <h3 class="section__subheader">GET STARTED</h3>
              <h2 class="section__header">What level of hiker are you?</h2>
              <p>
                Embark on a journey of self-discovery through our diverse
                selection of hiking trails. Whether you're a novice seeking
                tranquil strolls or a seasoned trekker craving challenging
                ascents, we cater to every level of expertise. Explore
                beginner-friendly paths winding through lush forests and beside
                babbling brooks, offering serene vistas and a gentle
                introduction to the great outdoors. For the adventurous souls,
                conquer demanding ascents with towering peaks and rugged
                terrains that test your limits and reward your determination.
                With tailored recommendations, find the perfect trail to match
                your hiking identity and immerse yourself in unforgettable
                experiences amidst the breathtaking beauty of nature.
              </p>
              <div class="about__btn">
                <a href="https://www.hikedaway.com/tips/levels-of-hiking/">
                  Read more
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div class="about__image about__image-2" id="equipment">
              <img src={about2} alt="about" />
            </div>
            <div class="about__content about__content-2">
              <h3 class="section__subheader">HIKING ESSENTIALS</h3>
              <h2 class="section__header">Picking the right hiking gear!</h2>
              <p>
                Equip yourself for hiking success with our meticulously selected
                gear, designed to tackle any terrain with ease. From durable
                footwear built to conquer rugged trails to lightweight backpacks
                engineered to carry your essentials effortlessly, we've got you
                covered. Navigate the complexities of gear selection with
                confidence, knowing that each item has been chosen to enhance
                your hiking experience. So lace up your boots, embark on your
                journey, and conquer the trails with the assurance that you're
                equipped for every adventure that lies ahead.
              </p>
              <div class="about__btn">
                <a href="https://drifttravel.com/a-guide-for-picking-the-right-gear-for-a-hiking-trip/">
                  Read more
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div class="about__image about__image-3" id="blog">
              <img src={about3} alt="about" />
            </div>
            <div class="about__content about__content-3">
              <h3 class="section__subheader">WHERE YOU GO IS THE KEY</h3>
              <h2 class="section__header">Understanding your map & timing</h2>
              <p>
                Mastering the art of timing is key to a safe and delightful
                journey. Dive deep into the details, anticipate shifting
                conditions, and synchronize your steps with nature's rhythm.
                Beyond a mere hike, it's a harmonious journey choreographed by
                your map, every step timed to perfection. So, immerse yourself
                in the intricacies, understanding the nuances of your
                surroundings. With each stride, embrace the dance of
                exploration, where timing is not just a skill but a symphony
                guiding you through the wilderness.
              </p>
              <div class="about__btn">
                <a href="https://www.thehikinglife.com/hiking-and-backpacking-skills/navigation/">
                  Read more
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <footer class="footer">
          <div class="section__container footer__container">
            <div class="footer__col">
              <div class="logo footer__logo">
                <a href="#">SummitSeeker Adventures</a>
              </div>
              <p>
                Get out there & discover your next slope, mountains &
                destination!
              </p>
            </div>
            <div class="footer__col">
              <h4>More on The Blog</h4>
              <br />
              <ul class="footer__links">
                <li>
                  <a href="#">
                    About SummitSeeker <br />
                    Adventures
                  </a>
                </li>
                <li>
                  <a href="#">Contributors & Writers</a>
                </li>
                <li>
                  <a href="#">Write For Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="footer__col">
              <h4>More on SummitSeeker Adventures</h4>
              <ul class="footer__links">
                <li>
                  <a href="#">The Team</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__bar"></div>
        </footer>
      </div>
    </>
  );
};

export default Home;
