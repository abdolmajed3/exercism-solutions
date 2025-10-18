//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();

  // Case 1: Silence (empty or only whitespace)
  if (message === "") {
    return "Fine. Be that way!";
  }

  // Case 2: Yelling and Question (all uppercase and ends with '?')
  if (message === message.toUpperCase() && message.endsWith("?") && /[a-zA-Z]/.test(message)) {
    return "Calm down, I know what I'm doing!";
  }

  // Case 3: Yelling (all uppercase) - check if there are any alphabetic characters
  if (message === message.toUpperCase() && /[a-zA-Z]/.test(message)) {
    return "Whoa, chill out!";
  }

  // Case 4: Question (ends with '?')
  if (message.endsWith("?")) {
    return "Sure.";
  }

  // Case 5: Anything else
  return "Whatever.";
};

