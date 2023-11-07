var express = require('express');
var router = express.Router();
const crypto = require('node:crypto');

var studio = {
  brandName: "SMASH Games",
  missionStatment: "At Smash Games, we know that gaming isn't just a hobby – it's a passion. We believe that video games have the power to transport players to new worlds, to tell stories, and to provide an escape from the everyday. That's why we've made it our mission to create high-intensity, action-packed video games that are as immersive as they are thrilling. Founded by a team of seasoned game developers and passionate gamers, Smash Games is the result of a shared dream to create games that challenge and excite players. With years of experience in the industry, our team knows what it takes to create games that keep players engaged, and we're committed to bringing that expertise to every game we create. At Smash Games, we're driven by a love of gaming and a desire to push the boundaries of what's possible in the industry. Our team is constantly experimenting with new technology and gameplay mechanics, always striving to create games that are as innovative as they are entertaining. But at the end of the day, what matters most to us is our players. We're dedicated to creating games that provide an escape, an opportunity to let go of the stresses of daily life and lose oneself in a world of high-octane action and adventure. We believe that gaming is more than just entertainment – it's a way to connect with others, to explore new worlds, and to experience the thrill of the unknown. So whether you're a seasoned gamer or new to the world of video games, we invite you to join us on this journey. Let Smash Games take you on an adventure that will leave you breathless and energized – we promise, it'll be an experience you won't soon forget.",
  contacts: [
    { name: "email", address: "contact@smashgames.com" },
    { name: "twitter", address: "@smashgames" },
    { name: "youtube", address: "https://youtube.com/smashgames" },
    { name: "facebook", address: "https://facebook.com/smashgames" },
  ],
  news: [
    { headline: "Inferno Blast Out Now!", media: "/assets/images/Inferno/Inferno-3.png", body: "Face off against towering demon bosses, each with their own unique strengths and weaknesses in our newest release!" },
    { headline: "In Development!", media: "/assets/images/SmashGamesLogo-short.png", body: "New things are coming from SMASH Games! Keep an eye on social media for new details!" },
    { headline: "Now Hiring!", media: "/assets/images/studio.jpg", body: "Do you have what it takes to make the coolest games on earth? Apply now." },
  ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.json(studio);
});

module.exports = router;
