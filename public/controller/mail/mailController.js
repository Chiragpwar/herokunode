const nodemailer = require("nodemailer");
const Configuration = require("../../config/Configuration");
const modal = require("../../modal/customModal");

exports.Sendmail = (req, res) => {
  const data = {
    To: req.body.email
  };
  req.session.random = Math.floor(100000 + Math.random() * 900000);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: Configuration.Maildata.Username,
      pass: Configuration.Maildata.Password
    }
  });

  var mailOptions = {
    from: Configuration.Maildata.Username,
    to: data.To,
    subject: `Your Confirmation code - ${req.session.random}`,
    text: `Your confirmation code is here - ${req.session.random} please verify and enjoy your meeting !!`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info.response);
    }
  });
};

exports.contactUsmail =   async (req, res) => {

  console.log('enter');
  
  const UserData = new modal.ContactusModal({
    WorkEmail: req.body.WorkEmail,
    CompanyName: req.body.CompanyName,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Communication: req.body.Communication,
    Country: req.body.Country,
    NumberofEmployee: req.body.NumberofEmployee
  });

  console.log(Configuration.Maildata.Username)

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: Configuration.Maildata.Username,
      pass: Configuration.Maildata.Password
    }
  });

  var mailOptions = {
    from :Configuration.Maildata.Username ,
    to: UserData.WorkEmail,
    subject: `Easy video meetings for your business - contact by ${UserData.CompanyName}`,
    text: JSON.stringify(UserData)
  };


 await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info.response);
    }
  });
};
