import React from "react";
import "./footer.css";
import mapimg from "./images/map.jpg";
import i1img from "./images/i1.png";
import i2img from "./images/i2.png";
import i3img from "./images/i3.png";
import fbimg from "./images/fb.jpg";
import instaimg from "./images/insta.jpg";
import linimg from "./images/linkin.jpg";
import twimg from "./images/tweet.jpg";

function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        flex: "1",
        bottom: "0",
        width: "100%",
        height: "2.5rem",
      }}
    >
      <div className='Container'>
        <div className='Row'>
          <div>
            <img src={mapimg} alt='' />
          </div>
          <div>
            <h4 style={{ color: "yellowgreen" }}>About Us</h4>
            <p style={{ color: "white" }}>
              "Govi Saviya" is an agricultural farm that has been there in the
              industry for a considerable time period. It is well reputed,
              highly demanding agricultural farm having a significant customer
              base.
            </p>
          </div>
          <div>
            <h4 style={{ color: "yellowgreen" }}>About Us</h4>
            <div>
              <ul className='ftr-links-sub'>
                <li>
                  {" "}
                  <li>
                    <img
                      width='14'
                      height='14'
                      alt=''
                      src={i1img}
                      className='photo'
                    />

                    <span>+94 112567876</span>
                  </li>
                </li>
                <li>
                  <li>
                    <img
                      width='24'
                      height='24'
                      alt=''
                      src={i2img}
                      className='photo'
                    />
                    <span>govisaviya@gmail.com</span>
                  </li>
                </li>
                <li>
                  <li>
                    <img
                      width='24'
                      height='24'
                      alt=''
                      src={i3img}
                      className='photo'
                    />
                    <span>No.200,Kiesly Road,Colombo 10,Sri Lanka.</span>
                  </li>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 class='ftr-hdr' style={{ color: "yellowgreen" }}>
              Follow Us
            </h4>
            <div>
              <ul className='ftr-links-sub'>
                <li>
                  <li>
                    <img
                      width='14'
                      height='14'
                      alt=''
                      src={fbimg}
                      className='photo'
                    />
                    <span>govisaviya.facebook.com</span>
                  </li>
                </li>
                <li>
                  <li>
                    <img
                      width='24'
                      height='24'
                      alt=''
                      src={instaimg}
                      className='photo'
                    />
                    <span>govisaviya.facebook.instergram.com</span>
                  </li>
                </li>

                <li>
                  <li>
                    <img
                      width='24'
                      height='24'
                      alt=''
                      src={linimg}
                      className='photo'
                    />
                    <span>govisaviya.linkedin.com</span>
                  </li>
                </li>

                <li>
                  <li>
                    <img
                      width='24'
                      height='24'
                      alt=''
                      src={twimg}
                      className='photo'
                    />
                    <span>govisaviyatwitter.com.</span>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h6>
          <p style={{ color: "white" }}>
            Copyright &copy; 2020 Govisaviya Farm Management System.
          </p>
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
