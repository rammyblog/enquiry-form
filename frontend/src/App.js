import EnquiryForm from "./components/EnquiryForm";
import "./App.css";
import logo from "./assets/images/contact.jpg";
function App() {
  return (
    <div className="app">
      <div className="contact-container">
        <div>
          <h2 className="contact-text">Contact us</h2>
          <img src={logo} alt="contact us" />
        </div>
        <EnquiryForm />
      </div>
    </div>
  );
}

export default App;
