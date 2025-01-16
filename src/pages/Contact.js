import { motion } from 'framer-motion';
import { images } from '../assets/media';
import { useState, useEffect } from 'react';
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from 'react-icons/hi2';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const marbleImg = new Image();
    marbleImg.src = images.materials.marble;
    marbleImg.onload = () => setImageLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your server
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Contact Form Section */}
      <section className="relative min-h-screen bg-black text-white">
        <div className="absolute inset-0">
          <img
            src={images.materials.marble}
            alt="Marble Texture"
            className={`w-full h-full object-cover scale-110 ${
              imageLoaded ? 'opacity-40' : 'opacity-0'
            } transition-opacity duration-700`}
            style={{ filter: 'contrast(110%) brightness(85%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 pt-32 pb-32">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Get in Touch
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl max-w-3xl mx-auto font-light drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Lets discuss your project together.
                </motion.p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-white mb-2"
                      htmlFor="firstName"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${
                        errors.firstName ? 'border-red-500' : 'border-white/10'
                      } rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors`}
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white mb-2" htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${
                        errors.lastName ? 'border-red-500' : 'border-white/10'
                      } rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors`}
                      required
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors`}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white mb-2" htmlFor="phone">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      } rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2" htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full bg-white/5 border ${
                      errors.message ? 'border-red-500' : 'border-white/10'
                    } rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors resize-none`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <ReCAPTCHA sitekey="your-recaptcha-site-key" theme="dark" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded text-lg font-semibold transition-colors ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-white/20'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[60vh] bg-black">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className="grayscale"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
