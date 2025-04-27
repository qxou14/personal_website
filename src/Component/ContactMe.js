import React from "react";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

function ContactPage() {
  return (
    <>
      <h1 className="section-header-name" id="contact">
        Contact Me
      </h1>
      <div className="icon-list">
        <div className="icon">
          <a
            href="https://github.com/qxou14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub fontSize="lg" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/qianxing-ou-3096811a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize="lg" />
          </a>
        </div>
      </div>
      <div className="email">
        <a
          href="mailto:qxou14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email /> qxou14@gmail.com
        </a>
      </div>
    </>
  );
}

export default ContactPage;
