function createLoginTracker(userInfo) {
  let attemptCount = 0

  const login = () => {

    // increase login attempt count
    attempt++;
    // lock attempt count if it reaches 3
    if (attemptCount > 3) {
      return "account locked due to too many failed login attempts"
    };
  };
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};