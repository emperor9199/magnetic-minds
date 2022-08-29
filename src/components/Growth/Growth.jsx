import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Growth.css";

function Growth() {
  const [client, setClient] = useState(1);
  const [trainer, setTrainer] = useState(1);
  const [projects, setProjects] = useState(1);
  const [years, setYears] = useState(1);

  useEffect(() => {
    if (client < 10) {
      setTimeout(() => {
        setClient((counter) => counter + 1);
      }, 100);
    }
  }, [client]);

  useEffect(() => {
    if (client < 10) {
      setTimeout(() => {
        setTrainer((counter) => counter + 1);
      }, 100);
    }
  }, [trainer]);

  useEffect(() => {
    if (client < 10) {
      setTimeout(() => {
        setProjects((counter) => counter + 1);
      }, 100);
    }
  }, [projects]);

  useEffect(() => {
    if (client < 2) {
      setTimeout(() => {
        setYears((counter) => counter + 1);
      }, 1000);
    }
  }, [years]);

  
  return (
    <div className="growth-section">
      <div className="growth-section-title">Growth</div>
      <div className="animated-line" />
      <div className="common-flex-for-center growth-section-card">
        <div className="growth-card common-flex-for-center">
          <div className="growth-no">{years}+</div>
          <div className="growth-text">Years</div>
        </div>
        <div className="growth-card common-flex-for-center">
          <div className="growth-no">{client}+</div>
          <div className="growth-text">Clients</div>
        </div>
        <div className="growth-card common-flex-for-center">
          <div className="growth-no">{trainer}+</div>
          <div className="growth-text">Trainer</div>
        </div>
        <div className="growth-card common-flex-for-center">
          <div className="growth-no">{projects}+</div>
          <div className="growth-text">Projects</div>
        </div>
      </div>
    </div>
  );
}

export default Growth;
