function getLoginMessage(isLoggedIn) {
  if (isLoggedIn) {
    return "Login successful";
  }
  return "Login failed";
}

module.exports = { getLoginMessage };
