import React, { useState } from "react";

// Contact info
const CONTACT_INFO = [
  {
    icon: "📧",
    label: "Email",
    value: "shivanidiwakar1122@gmail.com",
    href: "mailto:shivanidiwakar1122@gmail.com",
    isLink: true,
  },
  {
    icon: "📍",
    label: "Location",
    value: "India",
    isLink: false,
  },
  {
    icon: "⏱",
    label: "Response Time",
    value: "Usually within 24 hours",
    isLink: false,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/shivani",
    href: "https://www.linkedin.com/in/shivani-diwakar-2409482b2",
    isLink: true,
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ✅ handleChange (IMPORTANT)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ handleSubmit (CONNECTED TO BACKEND)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.text();
      console.log("Response:", data);

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-5">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="text-xl">{item.icon}</div>
                <div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                  {item.isLink ? (
                    <a href={item.href} className="text-cyan-400">
                      {item.value}
                    </a>
                  ) : (
                    <div>{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            {submitted ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded"
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded"
                />

                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

// ✅ Success Message
function SuccessMessage() {
  return (
    <div className="text-center py-10">
      <h3 className="text-xl text-green-400">Message Sent 🚀</h3>
      <p>I'll get back to you soon!</p>
    </div>
  );
}

export default Contact;

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};