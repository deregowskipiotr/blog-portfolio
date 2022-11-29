import React from 'react';
import { data } from './data.js';

import './Members.css';

function Members() {
  return (
    <div id="members" className="container members-container">
      <span className="members-title">Polecamy</span>

      <div className="third">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="imgBox">
              <img src={item.image} alt=''/>
            </div>
            <div className="details">
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.describe}</p>
                <h5>{item.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;