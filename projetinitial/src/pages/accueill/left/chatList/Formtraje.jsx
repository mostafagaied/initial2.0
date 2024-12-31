import React from "react";
import "./chatList.css";

const Formtraje = () => {
  return (
    <div className="colored-section">
    <form>
      <fieldset>
        <legend>Form Trajet</legend>
<table className="custom-table">
  
  <tr>
    <td className="form-cell">
      <div className="form-group">
        <label htmlFor="from">From:</label>
        <select id="from" name="from" required>
          <option value="">Select a location</option>
          <option value="ENISo">ENISo</option>
          <option value="SAHLOUL">SAHLOUL</option>
          <option value="KALLA KEBIRA">KALLA KEBIRA</option>
          <option value="MESTIR">MESTIR</option>
          <option value="SOUSSE">SOUSSE</option>
          <option value="MEHDIA">MEHDIA</option>
        </select>
      </div>
    </td>
    <td className="form-cell">
      <div className="form-group">
        <label htmlFor="to">To:</label>
        <select id="to" name="to" required>
          <option value="">Select a destination</option>
          <option value="ENISo">ENISo</option>
          <option value="SAHLOUL">SAHLOUL</option>
          <option value="KALLA KEBIRA">KALLA KEBIRA</option>
          <option value="MESTIR">MESTIR</option>
          <option value="SOUSSE">SOUSSE</option>
          <option value="MEHDIA">MEHDIA</option>
        </select>
      </div>
    </td>
  </tr>

  
  <tr>
    <td className="form-cell">
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />
      </div>
    </td>
    <td className="form-cell">
      <div className="form-group">
        <label htmlFor="places">Nombre de Places:</label>
        <input type="number" id="places" name="places" min="1" max="10" required />
      </div>
    </td>
  </tr>

  
  <tr>
    <td className="form-cell">
      <div className="form-group">
        <label htmlFor="departure-time">Heure de Départ:</label>
        <input type="time" id="departure-time" name="departure-time" required />
      </div>
    </td>
    <td className="form-cell">
      <div className="form-group">
        <label htmlFor="arrival-time">Heure d'Arrivée:</label>
        <input type="time" id="arrival-time" name="arrival-time" required />
      </div>
    </td>
  </tr>
</table>

        <div className="">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Add a short description..."
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </fieldset>
    </form></div>
  );
};

// Simple inline styles for the form



export default Formtraje;
