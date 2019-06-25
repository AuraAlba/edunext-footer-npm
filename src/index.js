import React from 'react';

function SiteFooter(props) {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={props.siteLogo} />
      </div>
      <div className="footer-description">
        <p>{props.descriptionFooter }</p>
      </div>
      <div className="footer-links">
        <ul>
          {props.linkList.map(link => (
            <li key = {link.url}>
              <a href = {link.url}>{link.title}</a>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SiteFooter;
