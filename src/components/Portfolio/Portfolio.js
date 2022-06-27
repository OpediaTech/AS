import React from "react";

// portfolio image
import portfolio1 from "../../images/portfolio-img-6.png";
import portfolio2 from "../../images/portfolio-img-5.png";
import portfolio3 from "../../images/portfolio-img-4.png";
import portfolio4 from "../../images/portfolio-img-3.png";
import portfolio5 from "../../images/portfolio-img-2.png";
import portfolio6 from "../../images/portfolio-img-1.png";

const PorffolioData = [
  {
    image: portfolio1,
    title: "AACD Advisor",
    video: "https://player.vimeo.com/video/412253743",
  },
  {
    image: portfolio2,
    title: "NGMA Membership Promo Video",
    video: "https://player.vimeo.com/video/454108795",
  },
  {
    image: portfolio3,
    title: "2021 AASL Conference Promo",
    video: "https://player.vimeo.com/video/447812515",
  },
  {
    image: portfolio4,
    title: "AASL Industry Video",
    video: "https://player.vimeo.com/video/440460177",
  },
  {
    image: portfolio5,
    title: "VPMA Stock Library",
    video: "https://player.vimeo.com/video/471549573",
  },
  {
    image: portfolio6,
    title: " AAFA Shipping Crisis Explainer",
    video: "https://player.vimeo.com/video/607613229?h=f302951440",
  },
];

function Portfolio() {
  return (
    <section class="section-gapping live-action-section vpma-portfolio-section">
      <div class="vc_row">
        <div class="container vc_col-sm-12">
          <h2 class="common-title wow fadeInUp">
            Association <em>Portfolio</em>
          </h2>
          <div class="portfolio-content wow fadeInUp">
            <p>
              Learn from hundreds of other associations to get ideas to engage
              your membership and industry.
            </p>
          </div>
          <div class="portfolio-blog-warp wow fadeInUp">
            <div class="portfolio-content-wrap">
              {PorffolioData.map((item) => (
                <div class="portfolio-section">
                  <div class="portfolio-wrap">
                    <div class="portfolio-video">
                      <a class="wplightbox video-popup" href={item.video}>
                        <img src={item.image} alt="portfolio-image" />
                      </a>
                    </div>
                    <div class="partners-title">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
