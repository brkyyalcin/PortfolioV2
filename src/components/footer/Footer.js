import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { useTranslation } from 'react-i18next';
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const { t, i18n } = useTranslation();

  var greeting =  t('greeting', { returnObjects: true});
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
        {greeting.title2}
        </p>
      </Fade>
    </div>
  );
}
