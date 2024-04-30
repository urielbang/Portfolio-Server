const nodemailer = require("nodemailer");

exports.getContact = async (req, res) => {
  try {
    const body = req.body;

    // Send email
    await sendEmail(body);

    res.status(200).json({
      data: {
        message: "Data received and email sent successfully",
      },
    });
  } catch (error) {
    res.status(500).json({
      data: {
        status: "failed",
        message: error.message,
      },
    });
  }
};

async function sendEmail(data) {
  // Configure the transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "uri32655@gmail.com", // Your email address
      pass: `wgku ntzz qgfn stlz
      `, // Your password
    },
  });

  let mailOptions = {
    from: data.email, // Sender address
    to: data.email, // List of recipients
    subject: "Portfolio contact", // Subject line
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}\n Phone:${data.phone}`, // Plain text body
  };

  await transporter.sendMail(mailOptions);
}
