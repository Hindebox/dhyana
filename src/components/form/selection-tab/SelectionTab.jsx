import "./selection-tab.scss";
import LoginForm from "../../form/login-form/LoginForm";
import RegisterForm from "../../form/register-form/RegisterForm";
import { useState } from "react";

export default function selectionTab() {
  const [activeTab, setActiveTab] = useState("loginTab");

  function handleActive(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="tab-container">
      {/* TABS */}
      <ul className="tabs">
        <li
          className={activeTab === "loginTab" ? "active" : ""}
          onClick={() => handleActive("loginTab")}
        >
          Login
        </li>
        <li
          className={activeTab === "registerTab" ? "active" : ""}
          onClick={() => handleActive("registerTab")}
        >
          Register
        </li>
      </ul>
      {/* content will be shown here */}
      <div className="outlet">
        {activeTab === "loginTab" ? <LoginForm /> : <RegisterForm />}
      </div>

      {/* differenciate animation from selected tab */}
      <style>{`
        .active::before {
          animation: ${
            activeTab === "loginTab" ? "slidein" : "reverseSlidein"
          } 1s forwards; /* Use different animation based on active tab */
        }

        `}</style>
    </div>
  );
}
