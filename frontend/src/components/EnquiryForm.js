import "./EnquiryForm.css";
import { useState } from "react";
import { sendEmail } from "../api";
import { toast } from "react-toastify";

const EnquiryForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(initialValues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDetails);
    const res = await sendEmail(formDetails);

    if (res === 200) {
      toast.success("🎉Your enquiry has been sent!");
      setFormDetails(initialValues);
    } else {
      // console.log({ status });
      toast.error(`🤦${res}`);
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
