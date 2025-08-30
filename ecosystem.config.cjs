module.exports = {
  apps: [
    {
      name: "mern-backend",
      script: "./backend/server.js",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 5000,
        JWT_SECRET: "kirtan7120",
        MONGO_URI: "mongodb://localhost:27017/MernEcommerce",
        RAZORPAY_KEY_ID: "ADD_YOUR_RAZORPAY_KEY_ID",
        RAZORPAY_KEY_SECRET: "ADD_YOUR_RAZORPAY_KEY_SECRET",
        PAGINATION_MAX_LIMIT: 12,
        EMAIL_HOST: "smtp-relay.brevo.com",
        EMAIL_PORT: 587,
        EMAIL_USER: "ADD_YOUR_BREVO_LOGIN",
        EMAIL_PASS: "ADD_YOUR_BREVO_PASSWORD",
        EMAIL_FROM: "ADD_YOUR_BREVO_LOGIN",
        HOST: "http://13.233.85.201"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5000,
        JWT_SECRET: "kirtan7120",
        MONGO_URI: "mongodb://localhost:27017/MernEcommerce",
        RAZORPAY_KEY_ID: "ADD_YOUR_RAZORPAY_KEY_ID",
        RAZORPAY_KEY_SECRET: "ADD_YOUR_RAZORPAY_KEY_SECRET",
        PAGINATION_MAX_LIMIT: 12,
        EMAIL_HOST: "smtp-relay.brevo.com",
        EMAIL_PORT: 587,
        EMAIL_USER: "ADD_YOUR_BREVO_LOGIN",
        EMAIL_PASS: "ADD_YOUR_BREVO_PASSWORD",
        EMAIL_FROM: "ADD_YOUR_BREVO_LOGIN",
        HOST: "http://13.233.85.201"
      }
    }
  ]
};
