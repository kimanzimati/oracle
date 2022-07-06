require("dotenv").config();

module.exports = {
    hrPool: {
      user: process.env.HR_USER,
      password: process.env.HR_PASSWORD,
      connectString: process.env.HR_CONNECTSTRING,
      poolMin: 10,
      poolMax: 10,
      poolIncrement: 0
    }
  };