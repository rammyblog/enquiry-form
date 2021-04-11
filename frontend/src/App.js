import EnquiryForm from "./components/EnquiryForm";
import "./App.css";
import logo from "./assets/images/contact.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app">
      <div className="contact-container">
        <div>
          <h2 className="contact-text">Contact us</h2>
          <img src={logo} alt="contact us" />
        </div>
        <EnquiryForm />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
