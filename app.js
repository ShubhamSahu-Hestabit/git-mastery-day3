function getLoginMessage(isLoggedIn) {
  if (isLoggedIn) {
    return "Login Successful!";
  }
  return "Login failed";
}

module.exports = { getLoginMessage };
