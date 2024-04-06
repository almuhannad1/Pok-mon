import React, { useState, useEffect } from "react";
import "./Modal.css";

function PokemonDetails({ details }) {
  const [modal, setModal] = useState(false);
  const [evolution, seEvolution] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        more
      </button>

      {modal && (
        <div className="modal" key={details.id}>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{capitalize(details.name)}</h2>
            <div className="container-details">
              <div className="left">
                <img src={details.sprites.front_default} alt={details.name} style={{ width: "25%", height: "40%" }} />
                <div>



                </div>
              </div>

              <div className="right">
                <div className="table-container">
                  <table class="top-table">
                    <tr>
                      <th>Type</th>
                      <td>{capitalize(details.types[0].type.name)}</td>
                    </tr>

                    <tr>
                      <th>Hight</th>
                      <td>{details.height} Cm</td>
                    </tr>

                    <tr>
                      <th>Weight</th>
                      <td>{details.weight} Lbs</td>
                    </tr>
                  </table>

                  <table className="bottom-table">
                    <tr>
                      <th>Hp</th>
                      <td>{details.stats[0].base_stat}</td>
                    </tr>

                    <tr>
                      <th>Attack</th>
                      <td>{details.stats[1].base_stat}</td>
                    </tr>

                    <tr>
                      <th>Defense</th>
                      <td>{details.stats[2].base_stat}</td>
                    </tr>

                    <tr>
                      <th>Speed</th>
                      <td>{details.stats[5].base_stat}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PokemonDetails