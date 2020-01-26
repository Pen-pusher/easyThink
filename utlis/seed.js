// Requring The Admin Schema
var Admin = require("../model/adminModel");

// Seeding Middlwe-Ware for Admin
Admin.find({}, (err, admin) => {
  if (admin.length === 0) {
    var admin = {
      name: "Piyush",
      email: "piyushchakraborty9@gmail.com",
      password: "123456"
    };
    Admin.create(admin, (err, seededAdmin) => {
      if (err) return console.log("Error While Seeding");
      return console.log(seededAdmin, " Admin Seeded Into Db Sucessfully");
    });
  } else {
    console.log("Admin May Also Presented In The Database");
  }
});
