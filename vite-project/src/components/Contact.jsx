import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" || name === "subject") {
      if (!/^[A-Za-z\s]*$/.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    const alphaRegex = /^[A-Za-z\s]+$/;
    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!alphaRegex.test(formData.name.trim())) {
      newErrors.name = "Only alphabets are allowed.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (!alphaRegex.test(formData.subject.trim())) {
      newErrors.subject = "Only alphabets are allowed.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setSuccess("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-cyan-400 font-medium">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
           Simply want to connect? I'd love to hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">
 <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-5">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-8 mb-10">
              I'm currently looking for internship opportunities
              where I can learn, contribute, and grow as a
              Frontend Developer.
            </p>

            <div className="space-y-8">

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Location
                </h4>

                <p className="text-gray-300 mt-1">
                  Karachi, Pakistan
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  LinkedIn
                </h4>

               <a href="https://www.linkedin.com/in/alizah-arshad-504b96377?utm_source=share_via&utm_content=profile&utm_medium=member_android">Click Here For LinkedIn Account</a>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Status
                </h4>

                <p className="text-green-400 mt-1">
                  Open to Internship Opportunities, And Freelance Projects.
                </p>
              </div>

            </div>

          </div>
 <form
            onSubmit={handleSubmit}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-6">
  <div>
                <label className="block mb-2 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={30}
                  placeholder="Your Name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />

                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.name}
                  </p>
                )}

              </div>
  <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.email}
                  </p>
                )}

              </div>

            </div>
             <div className="md:col-span-2">

              <label className="block mb-2 font-medium">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                maxLength={40}
                placeholder="Subject"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />

              {errors.subject && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.subject}
                </p>
              )}

            </div>
<div className="md:col-span-2">

              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              ></textarea>

              {errors.message && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.message}
                </p>
              )}
            </div>
             {success && (
              <div className="md:col-span-2 bg-green-500/10 border border-green-500 text-green-400 rounded-xl p-4">
                {success}
              </div>
            )}
             <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-cyan-400 text-slate-950 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-300 transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;