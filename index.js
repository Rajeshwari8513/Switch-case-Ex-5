let webBrowser = "Opera";

switch (webBrowser) {
  case "Chrome":
  case "Firefox":
  case "Safari":
console.log(`The browser is supported ${webBrowser}.`);
  break;
  case "Opera":
  case "Internet-Explorer":
  console.log(`The browser is not-supported ${webBrowser}.`);
  break;
  default:
     console.log("Invalid")
}
