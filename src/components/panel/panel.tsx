import React from 'react';
import './panel.scss';

function Panel() {
  return (
      <div className='panel-container'>

        <div className='panel-header'>
          <div className='panel-header-left'>
            <div>Dinpro, UA</div>
            <div>Fri, 19 February, 10:17</div>
          </div>

          <div className='panel-header-right'>
            <div>icon</div>
            <div>Sunny</div>
          </div>
        </div>

        <div className='panel-chart'>
          
        </div>

        <div className='panel-footer'>
          <div className='panel-footer-left'>

            <div className='panel-footer-temperature'>

              <div className='digit'>+4</div>
              <div className='upper'>
                <div className='format'>
                  <span>*C</span>|
                  <span>*F</span>
                </div>
              </div>

            </div>

            <div className='panel-footer-feels'>
              Feels like +1
            </div>
          </div>

          <div className='panel-footer-right'>
            <div>Wind 12 ms</div>
            <div>Humidity 12 ms</div>
            <div>Pressure 12 ms</div>
          </div>
        </div>


      </div>
  );
}

export default Panel;
