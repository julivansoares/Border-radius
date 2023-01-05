
import './style.css';

function BorderRadius() {
  return (
    <div className='container'>
      <div className='sub-container' >

        <div id='BorderTopLeft' >
          <input type='text' id='BorderTopLeft' value='0'></input>
        </div>

        <div id='BorderTopRight'>
          <input type='text' id='BorderTopRight' value='0'></input>
        </div>

        <div id='BorderBottomLeft'>
          <input type='text' id='BorderBottomLeft' value='0'></input>
        </div>

        <div id='BorderBottomRight'>
          <input type='text' id='BorderBottomLeft' value='0'></input>
        </div>

        <div className='txt'>
          <textarea id='texto' readOnly='readonly'>
          </textarea>
        </div>

        <div>
          <input type='checkbox' id='webkit'></input>
          <label for='webkit'>Webkit</label>

          <input type='checkbox' id='gecko'></input>
          <label for='gecko'>Gecko</label>

          <input type='checkbox' id='css'></input>
          <label for='css'>Css</label>
        </div>


      </div>

    </div>
  );
}

export default BorderRadius;
