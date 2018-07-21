import AuthService from "./authService";
const auth = new AuthService(
  process.env.HYPHEN_DEMO_AUTH_CLIENT_ID,
  process.env.HYPHEN_DEMO_AUTH_DOMAIN_ADDRESS
);
export default auth;
