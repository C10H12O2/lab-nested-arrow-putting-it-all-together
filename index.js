function createLoginTracker(user) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    if (attemptCount >= 3) {
      return 'Account locked due to too many failed login attempts';
    }
    if (passwordAttempt === user.password) {
      attemptCount = 0;
      return 'Login successful';
    }
    attemptCount++;
    if (attemptCount >= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    }
    return `Attempt ${attemptCount}: Login failed`;
  };
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};