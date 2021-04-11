import "./EnquiryForm.css";
import { useState } from "react";
import { sendEmail } from "../api";
import { toast } from "react-toastify";

const EnquiryForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDetails);
    const status = await sendEmail(formDetails);
    if (status === 200) {
      toast.success("🎉Your enquiry has been sent!");
    } else {
      console.log({ status });
      toast.error(`🤦${status}`);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  return (
    <>
      <div className="enquiry-form">
        <form onSubmit={handleSubmit}>
          <div className="form-text-input">
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              onChange={handleFormChange}
              value={formDetails.name}
              required
            />
          </div>
          <div className="form-text-input">
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formDetails.email}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-text-input">
            <input
              type="text"
              placeholder="Enter Subject"
              name="subject"
              onChange={handleFormChange}
              value={formDetails.subject}
              required
            />
          </div>
          <div className="form-textarea-input">
            <textarea
              type="text"
              placeholder="Enter Message"
              name="message"
              onChange={handleFormChange}
              value={formDetails.message}
              rows="3"
              required
            />
          </div>
          <input type="submit" className="btn" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default EnquiryForm;
