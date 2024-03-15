import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to show or hide the button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px", // Adjusted right value for smaller screens
            zIndex: "99",
            backgroundColor: "skyblue",
            color: "black",
            border: "none",
            borderRadius: "50%", // Make it circular
            width: "50px", // Adjusted width for smaller screens
            height: "50px", // Adjusted height for smaller screens
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        >
          <i className="bi bi-arrow-up-circle-fill"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
