import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ children }) {
  const [showTop, setShowTop] = useState(true);
  function animateToTop(e) {
    e.preventDefault();
    var scrollToTop = window.setInterval(function () {
      var pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 4);
  }

  useEffect(() => {
    console.log(Window.scrollY);
  }, [Window.scrollY]);

  return (
    <div className="">
      {/* <div className="vpma-program-page"> */}
      <Header />
      {children}
      <Footer />
      {showTop && (
        <div className="tp" onClick={(event) => animateToTop(event)}>
          <a className="top-btn" href="javascript:void(0)">
            {" "}
          </a>
        </div>
      )}
    </div>
  );
}

export default Layout;
