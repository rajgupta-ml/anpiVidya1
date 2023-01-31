const nodemailer = require("nodemailer");

const  sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.EMAIL_PORT,
        secure: false, 
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass:process.env.EMAIL_PASSWORD,
        }
    })

    const mailoptions = {
        from: process.env.EMAIL_FROM,
        to : options.to,
        subject: options.subect,
        html: options.text,
    }

    transporter.sendMail(mailoptions, (err, info) => {
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    })
}


module.exports = sendEmail;


// Send grid will be used to rest the password and i have change the username to email so that i can send email 