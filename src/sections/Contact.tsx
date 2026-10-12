import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type SubmitEvent,
} from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // In useEffect cleanup:
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    };
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true); // Show loading state
    setErrorMessage("");
    setSuccessMessage(""); // Reset previous success message on new attempt

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      //   Reset form and stop loading
      setForm({ name: "", email: "", message: "" });

      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
      // 2. Display success confirmation
      setSuccessMessage(
        "Thank you! Your message has been sent successfully. 🎉",
      );
      // 3. Automatically remove it after 5 seconds
      successTimeoutRef.current = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex">
      <div className="h-full w-full px-5 md:px-10">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          {/* Left side contact form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-7"
              >
                {/* name field */}
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>
                {/* Email field */}
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>
                {/* Message field */}
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                  />
                </div>

                {/* Success Confirmation */}
                {successMessage && (
                  <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-center text-sm text-green-400 transition-all duration-300">
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <p className="text-center text-sm text-red-500">
                    {errorMessage}
                  </p>
                )}

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          {/* Right side the 3D model */}
          <div className="min-h-96 xl:col-span-7">
            <div className="h-full w-full overflow-hidden rounded-3xl bg-[#cd7c2e] hover:cursor-grab">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
