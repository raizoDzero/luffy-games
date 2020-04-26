import React from 'react';
import { Icon, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';

const Footer = withRouter(props => {
  const current = props.location.pathname;

  if (current === '/master') {
    return (
      <div style={{ display: 'none' }}>
        <br />
      </div>
    );
  }
  return (
    <div className="footer-cont">
      <div className="footer-title">Contacto</div>
      <Row className="row-contacts">
        <Col className="contact" sm={12}>
          <Icon type="phone" />
          <span>55 7802 2624</span>
          <span>ó 5512 5950 </span>
        </Col>
        <Col className="contact" sm={12}>
          <a
            href="https://www.facebook.com/Luffy-Games-648738985604938/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon type="facebook" />
            <span>Luffy Games</span>
          </a>
        </Col>
      </Row>
      <div className="footer-logo">
        Luffy <span>Games</span>
      </div>
      <div className="footer-rigths">
        © 2020 Luffy Games, Inc. All Rights Reserved.
      </div>
    </div>
  );
});

export default Footer;
