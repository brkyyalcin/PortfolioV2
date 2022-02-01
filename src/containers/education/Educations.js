import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { Fade } from "react-reveal";
import { useTranslation } from 'react-i18next';

function Educations(props) {
  const theme = props.theme;
  const { t, i18n } = useTranslation();
  var degrees = t('degrees', { returnObjects: true});
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            {degrees.education}
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} webbtn={degrees.websiteBtn} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
