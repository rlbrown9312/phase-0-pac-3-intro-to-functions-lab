function shout(string) {
  return string.toUpperCase(); 
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function whisper(string) {
  return string.toLowerCase();
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

//const string = "hello!";
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }
  if (string === string.toUpperCase()) {
   return "YES INDEED!"
  }
  if (string === "Let's have dinner together!") {
    return "I would love to!"
  }
}