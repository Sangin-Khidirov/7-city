import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Требования</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-6">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <ul>
                    {d.requirements
                      ? d.requirements.taxi.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                  <h3>{d.taxiService}</h3>
                  {d.yandexPro &&
                    <a href="https://pro.yandex.ru/ru-ru/moskva/knowledge-base/taxi" target="blank">
                      <img src={d.yandexPro}></img>
                    </a>}
                  {d.didi &&
                    <a href="https://web.didiglobal.com/ru/driver" target="blank">
                      <img src={d.didi}></img>
                    </a>
                  }
                  {d.cityMobil &&
                    <a href="https://city-mobil.ru/driver/cars" target="blank">
                      <img src={d.cityMobil}></img>
                    </a>
                  }
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
