import React from 'react';

const Abc = ({ props }) => {
  return (
    <div className="main-box">
      <div className="box">

        <div className="image">
          <img src={props.image} alt="" height={'100%'} />
        </div>

        <div className="con">
          <div className="main">

            <div className="sec">
              <h2>{props.name}</h2>
              <span>{props.status} - {props.species}</span>
            </div>

            <div className="sec">
              <span>Last known location:</span><br />
              <a href=''>{props.location.name}</a>
            </div>

            <div className="sec">
              <span>First seen in:</span><br />
              <a href=''>{props.origin.name}</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Abc;