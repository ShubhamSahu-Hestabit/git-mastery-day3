function getLoginMessage(isLoggedIn) {
  if (isLoggedIn) {
    return "Login-- successful! Welcome back from repo A.";
  }
  return "Login failed";
}

module.exports = { getLoginMessage };
