import React, { useEffect } from "react";
import WOW from "wowjs";
import footerBanner from "../../images/vpma-footer-img.png";
import Copyright from "./Copyright";

import { InlineWidget } from "react-calendly";

function Footer() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section className="section-gapping help-section vpma-help-section">
      <div className="container vc_col-sm-12">
        <div className="left-right-warp">
          <div className="left-cal vc_col-sm-6">
            <h2 className="common-title wow fadeInUp">
              Schedule a <em>Tour</em>
            </h2>
            <div className="content wow fadeInUp">
              <p>
                Let’s talk about your video engagement goals, share ideas, and
                answer your questions. Give us a call{" "}
                <a href="tel:8008206020">(800) 820-6020</a> or schedule the time
                best for you…
              </p>
            </div>
            <div className="day-select callender-height">
              <InlineWidget url="https://calendly.com/jimwacksman/jim?hide_event_type_details=1e" />
            </div>
          </div>
          <div className="right-img wow fadeInRight vc_col-sm-6">
            <div className="img">
              <div className="common-img-warp">
                <img src={footerBanner} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </section>
  );
}

export default Footer;
