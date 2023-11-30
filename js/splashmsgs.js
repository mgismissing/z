const msgs = [
	"Go touch grass",
	"Who asked",
	"The website for videos n stuff",
	"There is nothing we can do",
	"Did you just say \"skibidi toilet ohio\"? Get the fuck out of here.",
	"You got the secret message. Congrats! But who cares?",
	"Bro this website is trash - F tier",
	"Bro this website is cool - C tier",
	"BRO THIS WEBSITE IS FIRE! - S TIER!",
	"Also try YouTube",
	"Also try YouTube Kids",
	"Also try touching grass",
	"There is no message here.",
	"Why are you even wasting your time reading this extremely long piece of written material when you could watch videos?"
];

const rand = Math.floor(Math.random() * msgs.length);
const msg = msgs[rand];

document.getElementById("_SplashText").textContent = msg;