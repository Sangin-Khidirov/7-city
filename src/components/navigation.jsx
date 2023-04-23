import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <div>
              7-CITY
            </div>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className="icon">
              <a href="https://api.whatsapp.com/send?phone=79025870001" target="blank" >
                <i className="fa fa-whatsapp fa-lg"></i>
              </a>
            </li>
            <li className="icon" >
              <a  href="tel:+79025870001" >
                <i className="fa fa-phone fa-lg"></i>
              </a>
            </li>
            <li className="icon-number" >
              <a href="https://api.whatsapp.com/send?phone=79025870001" target="blank" >
                <div style={{display: 'flex'}} >
                  <div style={{marginRight: '10px'}} >
                    <i className="fa fa-whatsapp fa-lg" ></i>
                  </div>  
                  <div >    
                    +7 902 587 00 01
                  </div>
                </div>
              </a>
            </li>
            <li className="icon-number" >
              <a href="tel:+79025870001" >
                <div style={{display: 'flex'}} >
                  <div style={{marginRight: '10px'}} >
                    <i className="fa fa-phone fa-lg" ></i>
                  </div>  
                  <div >    
                    +7 902 587 00 01
                  </div>
                </div>
              </a>
            </li>
            <li className="phone-number" >
              <a >
                +7 902 587 00 01
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Требования
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                О компании
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
