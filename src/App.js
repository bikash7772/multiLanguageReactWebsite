import React from "react";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className='App'>
      <nav style={{ width: "100%", padding: "20px 0", background: "gray" }}>
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("hn")}>Hindi</button>
      </nav>
      <p>{t("title.1")}</p>
      <p>{t("title.2")}</p>
    </div>
  );
}

export default App;
