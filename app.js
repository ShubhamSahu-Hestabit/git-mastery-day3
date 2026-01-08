function getLoginMessage(isLoggedIn) {
  if (isLoggedIn) {
    return "Login successful! Welcome back.";
  }
  return "Login failed";
}

module.exports = { getLoginMessage };
