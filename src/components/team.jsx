import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-9 col-md-offset-1 section-title">
          <h2>Таксопарк 7-city</h2>
          <p>
            {props.data?.teamText}
          </p>
        </div>
        <div id="row">
          {props.data?.team
            ? props.data?.team.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
