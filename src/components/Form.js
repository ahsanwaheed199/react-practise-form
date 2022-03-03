import React, { useState } from "react";
import avatar from "../avatar.png";

const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    discord: "",
  });
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="">
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>
          <div className="form-btn-row">
            <div className="">
              <button>Change Photo</button>
            </div>
            <div className="">
              <button>Delete</button>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="label">
            <label>Adress</label>
          </div>
          <div>
            <input
              className="form-input"
              type="text"
              placeholder="Viken"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-row">
          <div className="label">
            <label>blast nick</label>
          </div>
          <div>
            <input
              className="form-input"
              type="text"
              placeholder="Viken"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-row">
          <div className="label">
            <label>Email</label>
          </div>
          <div>
            <input
              className="form-input"
              type="text"
              placeholder="viken@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-row">
          <div className="label">
            <label>Discord</label>
          </div>
          <div>
            <input
              className="form-input"
              type="text"
              placeholder="@discordname"
              value={formData.discord}
              onChange={(e) =>
                setFormData({ ...formData, discord: e.target.value })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
