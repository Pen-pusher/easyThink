// All Requires
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Extracting The Schema From The Mongoose
const schema = mongoose.Schema;

// Creating The Schema For Admin
const adminSchema = new schema(
  {
    name: {
      type: String,
      minlength: 4,
      required: true
    },
    email: {
      type: String,
      minlength: 5,
      unique: true,
      required: true
    },
    password: {
      type: String,
      minlength: 4,
      required: true
    }
  },
  { timestamps: true }
);

// Implementing The Pre-save Function To Hash The Password
adminSchema.pre("save", function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

// Comparig The Hash And Plane Password
adminSchema.methods.confirmPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// Making The Model Of The Schema
const Admin = mongoose.model("Admin", adminSchema);

// Exporting The Model Of The Schema
module.exports = Admin;
