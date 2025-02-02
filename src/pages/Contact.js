import { motion } from 'framer-motion';
import { images } from '../assets/media';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
      console.log('EmailJS initialized with public key');
    } else {
      console.error('EmailJS public key is missing');
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = images.materials.opralhouse;
    img.onload = () => setImageLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

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
    setSubmitStatus({ type: '', message: '' });

    try {
      const templateParams = {
        to_email: 'info@izpa.com.au',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      console.log('Sending email with params:', templateParams);
      console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
      console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
      console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);

      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We will contact you soon.',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-black">
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.materials.opralhouse}
            alt="Opera House"
            className={`w-full h-full object-cover scale-110 ${
              imageLoaded ? 'opacity-40' : 'opacity-0'
            } transition-opacity duration-700`}
            style={{ filter: 'contrast(110%) brightness(85%) grayscale(100%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-32 pb-60">
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
                  className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Get in Touch
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl max-w-3xl mx-auto font-light drop-shadow-lg text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Let's discuss your project together.
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

                {submitStatus.message && (
                  <div
                    className={`p-4 rounded ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

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
      </div>
    </div>
  );
};

export default Contact;
