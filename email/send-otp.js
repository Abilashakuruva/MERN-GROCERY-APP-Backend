const nodemailer=require("nodemailer")
const dotEnv=require("dotenv")

dotEnv.config()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendOtpEmail=async(email,otp)=>{
    await transporter.sendMail({
    from: `"OTP Verification" <${process.env.EMAIL_USER}>`, 
    to: email, 
    subject: "Your OTP code", 
    html: `<h2>Your OTP is: ${otp} <h2> <p> Valid for 5 minutes </p> `
  });


}