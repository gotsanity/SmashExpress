var express = require('express');
var router = express.Router();
const crypto = require('node:crypto');

var inferno = crypto.randomUUID();
var supercharged = crypto.randomUUID();
var starfighter = crypto.randomUUID();
var shadow = crypto.randomUUID();
var titan = crypto.randomUUID();
var jungle = crypto.randomUUID();

var games = [
  {
    "gameId": inferno,
    "title": "Inferno Blast",
    "shortDescription": "Battle your way through an otherworldly realm of fire and brimstone, taking on legions of demons and hellspawn.",
    "description": "Inferno Blast is an action-packed adventure game that takes players to a fiery realm of danger and excitement. In this game, you'll take on the role of a hero who must navigate through a series of treacherous levels filled with fiery obstacles and hordes of demons. With each level you complete, you'll unlock new weapons and power-ups to help you in your quest to defeat the ultimate demon boss. Can you survive the inferno and emerge victorious?",
    "image": "/images/inferno/inferno-1.png",
    "features": [
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": inferno,
            "name": "Dynamic Environments",
            "description": "Navigate through a variety of fiery landscapes, including lava pits, crumbling ruins, and demonic strongholds.",
            "image": "/images/inferno/inferno-1.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": inferno,
            "name": "Upgradable Weapons",
            "description": "Customize your arsenal with a range of weapons and power-ups, including flamethrowers, rocket launchers, and more.",
            "image": "/images/inferno/inferno-2.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": inferno,
            "name": "Epic Boss Battles",
            "description": "Face off against towering demon bosses, each with their own unique strengths and weaknesses.",
            "image": "/images/inferno/inferno-3.png"
        }
    ]
  },
  {
    "gameId": supercharged,
    "title": "Supercharged",
    "shortDescription": "Race your way to victory in a high-speed competition that will test your skills and your nerve.",
    "description": "Supercharged is a pulse-pounding racing game that challenges players to navigate treacherous tracks and outmaneuver their opponents. Choose from a range of high-performance vehicles and customize them to your liking, then hit the track and show off your driving skills. With realistic physics and cutting-edge graphics, Supercharged is a true test of speed and skill. Can you handle the heat and cross the finish line first?",
    "image": "/images/supercharged/supercharged-1.png",
    "features": [
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": supercharged,
            "name": "Customizable Cars",
            "description": "Choose from a range of high-performance vehicles and customize them with a variety of parts and upgrades.",
            "image": "/images/supercharged/supercharged-4.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": supercharged,
            "name": "Multiplayer Racing",
            "description": "Compete against other players in fast-paced online races, or team up with friends to take on cooperative challenges.",
            "image": "/images/supercharged/supercharged-2.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": supercharged,
            "name": "Exciting Tracks",
            "description": "Race across a variety of tracks, from urban streets to mountain highways, each with their own unique challenges and obstacles",
            "image": "/images/supercharged/supercharged-3.png"
        }
    ]
  },
  {
    "gameId": starfighter,
    "title": "Starfighter Assault",
    "shortDescription": "Blast your way through a galaxy of danger and adventure in this epic space shooter.",
    "description": "Starfighter Assault is a fast-paced space shooter that takes you on a journey through the stars. As a starfighter pilot, it's up to you to defend the galaxy against a horde of alien invaders. With a range of high-tech weapons and an arsenal of power-ups at your disposal, you'll take on enemy ships, asteroid fields, and more in your quest for victory. But be warned – the challenges will only get tougher as you progress through the game. Do you have what it takes to save the galaxy?",
    "image": "/images/starfighterassault/starfighter-1.png",
    "features": [
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": starfighter,
            "name": "Intense Space Battles",
            "description": "Take on swarms of enemy ships, dodging asteroids and other obstacles as you blast your way through the galaxy.",
            "image": "/images/starfighterassault/starfighter-1.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": starfighter,
            "name": "Upgradable Spaceships",
            "description": "Customize your ship with a variety of weapons and upgrades, including lasers, missiles, and shields",
            "image": "/images/starfighterassault/starfighter-2.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": starfighter,
            "name": "Immersive Storyline",
            "description": "Discover a rich and engaging storyline as you explore different corners of the galaxy, encountering new characters and challenges along the way.",
            "image": "/images/starfighterassault/starfighter-3.png"
        }
    ]
  },
  {
    "gameId": shadow,
    "title": "Shadow Realm",
    "shortDescription": "Explore a dark and mysterious realm of shadows, taking on fearsome monsters and uncovering ancient secrets.",
    "description": "Shadow Realm is an immersive adventure game that takes players on a journey into a world of darkness and mystery. As a skilled warrior, you'll fight your way through a series of challenging levels, facing off against a variety of terrifying monsters and uncovering ancient secrets. With intricate puzzles, atmospheric environments, and engaging storytelling, Shadow Realm will keep you on the edge of your seat as you explore this shadowy world.",
    "image": "/images/shadowrealm/shadowrealm-1.png",
    "features": [
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": shadow,
            "name": "Engaging Storyline",
            "description": "Uncover the secrets of the Shadow Realm through a rich and immersive storyline, filled with twists and turns.",
            "image": "/images/shadowrealm/shadowrealm-1.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": shadow,
            "name": "Stealth Gameplay",
            "description": "Use your stealth skills to evade enemies and sneak past obstacles, taking on enemies from the shadows.",
            "image": "/images/shadowrealm/shadowrealm-2.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": shadow,
            "name": "Challenging Puzzles",
            "description": "Solve a variety of challenging puzzles, from lock-picking to memory games, as you progress through the game.",
            "image": "/images/shadowrealm/shadowrealm-3.png"
        }
    ]
  },
  {
    "gameId": titan,
    "title": "Titan Siege",
    "shortDescription": "Join forces with other players to defend your city against an onslaught of colossal Titans.",
    "description": "Titan Siege is a multiplayer game that challenges players to band together to defend their city against a wave of enormous Titans. With a range of powerful weapons and special abilities at your disposal, you and your teammates will need to work together to take down these colossal foes. But the Titans won't go down without a fight – each one has its own unique set of strengths and weaknesses that you'll need to discover if you hope to emerge victorious. Will you be able to save your city from destruction?",
    "image": "/images/titan/titan-1.png",
    "features": [
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": titan,
            "name": "Cooperative Gameplay",
            "description": "Team up with other players to take on the Titans, using teamwork and strategy to bring down these colossal foes.",
            "image": "/images/smashgameslogo-short.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": titan,
            "name": "Unique Titans",
            "description": "Each Titan has its own set of strengths and weaknesses, requiring you to use different tactics and strategies to defeat them.",
            "image": "/images/smashgameslogo-short.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": titan,
            "name": "Base Building",
            "description": "Build and fortify your city, upgrading your defenses and infrastructure to withstand the Titan onslaught.",
            "image": "/images/smashgameslogo-short.png"
        }
    ]
  },
  {
    "gameId": jungle,
    "title": "Jungle Expedition",
    "shortDescription": "Embark on a thrilling adventure through the jungle, facing off against dangerous creatures and discovering hidden treasures.",
    "description": "Jungle Expedition is an action-packed adventure game that takes players on a journey into the heart of the jungle. As a daring explorer, you'll navigate through dense foliage and treacherous terrain, facing off against dangerous creatures and uncovering hidden treasures along the way. With a variety of weapons and power-ups at your disposal, you'll need to use your skills and wits to survive this jungle expedition. Will you be able to uncover the secrets of this mysterious land?",
    "image": "/images/jungle/jungle-1.png",
    "features": [
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": jungle,
            "name": "Stunning Environments",
            "description": "Explore lush and vibrant jungle environments, filled with exotic creatures and hidden treasures.",
            "image": "/images/jungle/jungle-2.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": jungle,
            "name": "Dynamic Weather",
            "description": "Experience changing weather patterns, from tropical storms to blazing heat, as you journey through the jungle.",
            "image": "/images/jungle/jungle-3.png"
        },
        {
            "gameFeatureId": crypto.randomUUID(),
            "gameId": jungle,
            "name": "Survival Elements",
            "description": "Hunt for food and gather resources to survive in the jungle, avoiding dangerous predators and hostile tribes along the way.",
            "image": "/images/jungle/jungle-4.png"
        }
    ]
}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.json(games);
});

// GET game by id
router.get('/:id', function(req, res, next) {
  let game = gameExists(req.params.id);

  res.status(200);
  res.json(game);
});

// POST a new game
router.post('/', function(req, res, next) {
  let id = crypto.randomUUID();

  let game = {
    gameId: id,
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    image: req.body.image,
    features: []
  }

  req.body.features.forEach(feature => {
    game.features.push({
      gameFeatureId: crypto.randomUUID(),
      gameId: id,
      name: feature.name,
      description: feature.description,
      image: feature.image
    });
  });

  games.push(game);

  res.status(201);
  res.json(game);
});

// PUT an updated game
router.put('/:id', function(req, res, next) {

  var game = gameExists(req.params.id, res);

  game.title = req.body.title;
  game.shortDescription = req.body.shortDescription;
  game.description = req.body.description;
  game.image = req.body.image;
  game.features = [];


  req.body.features.forEach(feature => {
    game.features.push({
      gameFeatureId: crypto.randomUUID(),
      gameId: game.gameId,
      name: feature.name,
      description: feature.description,
      image: feature.image
    });
  });

  var index = games.map(function(e) { return e.gameId; }).indexOf(req.params.id);

  games.splice(index, 1, game);

  res.status(200);
  res.json(game);

});

// DELETE a game
router.delete('/:id', function(req, res, next) {
  var game = gameExists(req.params.id, res);
  var index = games.map(function(e) { return e.gameId; }).indexOf(req.params.id);

  games.splice(index, 1);

  res.status(200);
  res.json({ "message": "deleted" });
});

function gameExists(id, res) {
  let game = games.filter(g => g.gameId == id)[0];

  if (!game) {
    res.status(404);
    res.send();
  }

  return game;
}

module.exports = router;
