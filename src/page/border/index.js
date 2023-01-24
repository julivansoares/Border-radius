
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

function BorderRadius() {

  const [border, setBorde] = useState({ topL: 0, topR: 0, bottomL: 0, bottomR: 0 })

  useEffect(() => {
    const div = document.querySelector('.sub-container');
    div.style.borderRadius = `${border.topL}px ${border.topR}px ${border.bottomR}px ${border.bottomL}px`;
    console.log('ok');
  }, [])

  return (


    <div className='container'>

      <h1>Border Radius</h1>

      <div className='sub-container' >

        <div id='BorderTopLeft' >
          <input type="text" id='BorderTopLeft'
            value={border.topL}
            onChange={(e) => setBorde({ ...border, topL: e.target.value })

            }>


          </input>
        </div>

        <div id='BorderTopRight'>
          <input type="text" id='BorderTopRight'
            value={border.topR}
            onChange={(e) => setBorde({ ...border, topR: e.target.value })
            }
          >
          </input>
        </div>

        <div id='BorderBottomLeft'>
          <input type="text" id='BorderBottomLeft'
            value={border.bottomL}
            onChange={(e) => setBorde({ ...border, bottomL: e.target.value })
            }
          >

          </input>
        </div>

        <div id='BorderBottomRight'>
          <input type="text" id='BorderBottomLeft'
            value={border.bottomR}
            onChange={(e) => setBorde({ ...border, bottomR: e.target.value })
            }
          >

          </input>
        </div>

        <div className='txt-area'>
          <textarea id='texto' readOnly='readonly'>
          </textarea>
        </div>

        <div className='sub-area'>
          <input type='checkbox' id='webkit'></input>
          <label htmlFor='webkit'>Webkit</label>

          <input type='checkbox' id='gecko'></input>
          <label htmlFor='gecko'>Gecko</label>

          <input type='checkbox' id='css'></input>
          <label htmlFor='css'>Css</label>
        </div>


      </div>


    </div>
  );
}

export default BorderRadius;
