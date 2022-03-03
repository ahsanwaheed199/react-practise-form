import avatar from "./avatar.png";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./App.css";
import Form from "./components/Form";
import Integration from "./components/Integration";
function App() {
  const handleSubmit = () => {};
  return (
    <IconContext.Provider value={{ color: "#30285d", size: "1em" }}>
      <div className="container">
        <div className="main-heading">
          <p>Profile</p>
        </div>
        <div className="header container-div-main">
          <div className="header-left">
            <div className="avatar-position">
              <img src={avatar} alt="Avatar" className="avatar" />
            </div>
            <div className="para">
              <p className="p-heading">Nickname</p>
              <p className="p-content">Viken</p>
            </div>
          </div>
          <div className="header-right">
            <div className="para">
              <p className="p-heading">Money earn</p>
              <p className="p-content">$12,000</p>
            </div>

            <div className="vl"></div>
            <div className="para">
              <p className="p-heading">Tournaments Played</p>
              <p className="p-content">12</p>
            </div>
            <div className="vl"></div>
            <div className="para">
              <p className="p-heading">Score</p>
              <p className="p-content">1209</p>
            </div>
          </div>
        </div>
        <div className="header1 container-div-main1">
          <div className="para">
            <p className="p-heading">Money earn</p>
            <p className="p-content">$12,000</p>
          </div>
          <div className="avatar-position1">
            <img src={avatar} alt="Avatar" className="avatar1 " />
            <p className="p-content1">Viken</p>
            <p className="p-heading1">1209</p>
          </div>
          <div className="para">
            <p className="p-heading">Tournaments Played</p>
            <p className="p-content">12</p>
          </div>
        </div>
        <div className="align-right">
          <p style={{ fontSize: "12px", margin: "3px", color: "#30285d" }}>
            Share profile
          </p>
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="icon">
            <FaTwitter />
          </div>
          <div className="icon">
            <FaFacebookSquare />
          </div>
        </div>
        <div className="personal">
          <div className="heading">
            <p>Personal</p>
          </div>
          <div className="container-div">
            <Form handleSubmit={handleSubmit} />
          </div>
        </div>
        <div className="integrations">
          <div className="heading">
            <p>Integration</p>
          </div>
          <div className="container-div">
            <Integration />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default App;
