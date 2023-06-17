/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_JS_USER: process.env.EMAIL_JS_USER,
    EMAIL_JS_SERVICE: process.env.EMAIL_JS_SERVICE,
    EMAIL_JS_TEMPLATE: process.env.EMAIL_JS_TEMPLATE,
  },
};

module.exports = nextConfig;
