import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import CongratsPopup from "./CongratsPopup";
import { BACKEND_URL } from "../utils/utils";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/api/techlead/register`, formData);
      toast.success("Registered successfully!");
      setShowPopup(true);
    } catch (err) {
      toast.error("Failed to register.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2"
          onChange={handleChange}
          required
        />
        <select
          name="college"
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
          <option value="">Select College</option>
          <option value="IIT Bombay">IIT Bombay</option>
          <option value="IIT Delhi">IIT Delhi</option>
          <option value="IIT Madras">IIT Madras</option>
          <option value="IIT Kanpur">IIT Kanpur</option>
          <option value="IIT Kharagpur">IIT Kharagpur</option>
          <option value="NIT Trichy">NIT Trichy</option>
          <option value="NIT Surathkal">NIT Surathkal</option>
          <option value="NIT Warangal">NIT Warangal</option>
          <option value="BITS Pilani">BITS Pilani</option>
          <option value="IIIT Hyderabad">IIIT Hyderabad</option>
          <option value="Delhi University">Delhi University</option>
          <option value="Jadavpur University">Jadavpur University</option>
          <option value="Anna University">Anna University</option>
          <option value="VIT Vellore">VIT Vellore</option>
          <option value="SRM University">SRM University</option>
          <option value="Amity University">Amity University</option>
          <option value="Christ University">Christ University</option>
          <option value="Islamiah College">Islamiah College</option>
          <option value="Priyadarshini Engineering College">
            Priyadarshini Engineering College
          </option>
          <option value="Islamiah Women's College">
            Islamiah Women's College
          </option>
          <option value="Loyola College, Chennai">
            Loyola College, Chennai
          </option>
          <option value="Madras Christian College">
            Madras Christian College
          </option>
          <option value="Aligarh Muslim University">
            Aligarh Muslim University
          </option>
          <option value="Banaras Hindu University">
            Banaras Hindu University
          </option>
          <option value="University of Hyderabad">
            University of Hyderabad
          </option>
          <option value="Osmania University">Osmania University</option>
          <option value="Pune University">Pune University</option>
          <option value="Manipal Institute of Technology">
            Manipal Institute of Technology
          </option>
          <option value="Shiv Nadar University">Shiv Nadar University</option>
          <option value="Chandigarh University">Chandigarh University</option>
          <option value="Graphic Era University">Graphic Era University</option>
          <option value="Lovely Professional University">
            Lovely Professional University
          </option>
          <option value="KIIT University">KIIT University</option>
          <option value="SASTRA University">SASTRA University</option>
          <option value="MIT WPU Pune">MIT WPU Pune</option>
          <option value="Jain University">Jain University</option>
          <option value="REVA University">REVA University</option>
          <option value="Sharda University">Sharda University</option>
          <option value="Ashoka University">Ashoka University</option>
          <option value="Presidency College, Chennai">
            Presidency College, Chennai
          </option>
        </select>
        <select
          name="role"
          onChange={handleChange}
          className="w-full border p-2"
          required
        >
          <option value="">You are a</option>
          <option>Professional</option>
          <option>Job Seeker</option>
          <option>Fresher</option>
          <option>Student</option>
        </select>
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white p-2"
        >
          Register
        </button>
      </form>
      <CongratsPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        whatsappLink="https://chat.whatsapp.com/your-group-id" // replace with real link
      />
    </>
  );
}

export default RegisterForm;
