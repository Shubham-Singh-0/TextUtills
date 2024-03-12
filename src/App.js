import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/textForm";
import Alert from "./Components/Alert";
// import About from "./Components/about";


function App() {
  const [mode, setMode] = useState('light')


  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode has been enable", "success")
      document.title = " Textutills -Dark mode"
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enable", "success")
      document.title = " Textutills - Light mode"
    }

  }
  return (
    <>

      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} Heading="Analyze The Text here" mode={mode} />
      </div>
    </>
  );
}

export default App;
