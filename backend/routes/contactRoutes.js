const express = require("express");
const Contact = require("../models/contact");

const router = express.Router();

// Submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email and message are required.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully!",
      contact,
    });
  } catch (error) {
    console.error("Contact form error:", error.message);

    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
});

module.exports = router;