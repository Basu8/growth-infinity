"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaComment,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db } from "../utils/firebase";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.phone) return setStatus("invalid-phone");

    setSubmitting(true);
    try {
      await addDoc(collection(db, "contactSubmissions"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <Navbar />

      <main className="flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 sm:p-10"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-gray-500 mt-2">
              Let’s talk about growing your business 🚀
            </p>
          </div>

          {/* Status */}
          {status === "success" && (
            <div className="mb-4 p-3 text-sm rounded bg-green-100 text-green-700">
              Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="mb-4 p-3 text-sm rounded bg-red-100 text-red-700">
              Something went wrong. Please try again.
            </div>
          )}
          {status === "invalid-phone" && (
            <div className="mb-4 p-3 text-sm rounded bg-yellow-100 text-yellow-700">
              Please enter a valid phone number.
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <FaUser className="input-icon" />
              <input
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input-field"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input-field"
              />
            </div>

            {/* Phone */}
            <div>
              <PhoneInput
                international
                defaultCountry="IN"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(value) =>
                  setFormData({ ...formData, phone: value ?? "" })
                }
                className="PhoneInput custom-phone"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaComment className="input-icon top-4" />
              <textarea
                rows={4}
                required
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="input-field resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              {submitting ? "Sending..." : "Send Message"}
              <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

