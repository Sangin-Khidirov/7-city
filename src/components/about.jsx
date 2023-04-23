import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container-fluid">
        <div className="row-xxl">
          <div className="col-xs-12 col-md-6">
            <img src="img/card.jpg" className="img-responsive" alt="card" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Преимущества сотрудничества с нами</h2>
              <div className="list-style">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
