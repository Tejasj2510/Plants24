import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const text = `
🌿 Plants24 Enquiry

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🪴 Plan: ${form.plan}
📝 Message: ${form.message}
    `;

    const whatsappURL = `https://wa.me/918421265523?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Contact Us</h2>

        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
        />

        <select name="plan" onChange={handleChange}>
          <option value="">Enqury Type</option>
          <option>Indoor Plants</option>
          <option>Outdoor Plants</option>
          <option>Bulk Order</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
        />

        <div className={styles.actions}>
          <button onClick={handleSubmit}>Send to WhatsApp</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}