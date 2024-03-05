const externalLinks = [
  {
    label: 'Play',
    tooltip: 'Play Asteroid Run 🚀 ',
    href: 'https://asteroidrun.crumb.so/',
    favicon: '/icons/external-link.svg'
  },
  {
    label: 'Repo',
    tooltip: 'View the code',
    href: 'https://github.com/AustinChiatto/asteroid-run-2.0.0',
    favicon: '/icons/github-original.svg'
  }
];

const videoShowcase = 'video/placeholder-video-showcase.mp4';

const techStack = [
  {
    label: 'JavaScript',
    icon: '/icons/javascript-original.svg',
    desc: 'Utilized for game controls and function'
  },
  {
    label: 'HTML Canvas',
    icon: '/icons/html5-original.svg',
    desc: 'Selected as the renderer for game assets'
  },
  {
    label: 'CSS',
    icon: '/icons/css3-original.svg',
    desc: 'Chosen for its simplicity.'
  },
  {
    label: 'VS Code',
    icon: '/icons/vscode-original.svg',
    desc: '[PH]'
  },
  {
    label: 'Figma',
    icon: '/icons/figma-original.svg',
    desc: '[PH]'
  }
];

const article = [
  {
    markdownSection: [
      `
## Learning object-oriented programming

I'm going to build a little browser game that will be a bit like **Space Invaders & Asteroids** had a baby.

I'm using this example to teach myself the basics of \`JavaScript classes\` and \`objects\`.

So, lets get coding!

### Table of Contents

* [Creating the game screen](#creating-the-game-screen)
* [Controlling the player](#controlling-the-player)
* [Spawning enemies](#spawning-enemies)
* [Collision and game over](#collision-and-game-over)

## Creating the game screen

To start I'll add the \`canvas\` and define it's dimension. This will be where the game's elements are rendered. I'll also start building the render function, which will be responsible for handling the visuals.

~~~html
<canvas class="game-canvas"></canvas>
~~~

Using \`requestAnimationFrame\` on itself, this function will run once per frame. I'll then use a _guard clause_ to check if the game is running before calling the \`clearRect()\` method on the canvas. This method erases everything previously drawn at the start of each frame, preparing it for the next.

~~~js
const canvas = document.querySelector(".game-canvas");
const c = canvas.getContext("2d");

canvas.width = 800;
canvas.height = innerHeight;

function render() {
	setTimeout(() => {
		requestAnimationFrame(render);
	});

	if (!game.active) return
	c.clearRect(0, 0, canvas.width, canvas.height);
}

render()
~~~

### Creating & Rendering the player
Now for the player!

I will start by building a \`class\` for the player. In the \`constructor\`, I will set the player's initial velocity, opacity, image, dimensions, and position. These will be what we manipulate to control the behaviour of the player.

~~~js
class Player {
	constructor() {
		this.velocity = {
			x: 0,
			y: 0,
		};
		this.opacity = 1;

		const image = new Image();
		image.src = playerShipAsset;
		image.onload = () => {
			this.image = image;
			this.width = image.width;
			this.height = image.height;
			this.position = {
			x: canvas.width / 2 - this.width / 2,
			y: canvas.height - this.height * 2,
		};
	};
}
~~~

Here, the player's velocity is set to 0 in both axes. An image object is created with a defined src, and the player's position is set using the dimensions of the player and canvas.

So why don't I see a player on screen?!

I forgot that I will need to add the \`draw()\` method to my Player class to visually represent the object in the \`canvas\` once it's created. Oh, I'll also need to create the Player object using the keyword **new**.

~~~js
draw() {
	c.save();
	c.globalAlpha = this.opacity;
	c.drawImage(
		this.image,
		this.position.x,
		this.position.y,
		this.width,
		this.height
	);
	c.restore();
}
~~~

~~~js
const player = new Player();
~~~

**Ta-da!** I have a player.
![Game screenshot](/images/asteroid-run_project-thumbnail.webp)

## Controlling the player

Currently, I have a static player and no way for the user to interact with it. I want to be able to move the player in both axes and shoot a projectile from the ship.
### Player Movement
I'll start by creating an object to store a \`boolean\` if a key is pressed.

~~~js
const controls = {
    left: {
        pressed: false,
    }, // repeat for all keyboard controls
}
~~~

Time to go ahead and write an event listener to modify the "pressed" values of the object. I'll create one for both \`keyUp\` and \`keyDown\`.

~~~js
addEventListener("keyup", ({ key }) => {
    switch (key) {
        case "ArrowLeft":
            controls.left.pressed = false;
            break;
		// new case for each control
~~~

Back in the \`render()\` function, I'll add two \`if\` statement blocks for vertical and horizontal movement. These blocks will check if a control is pressed and if the \`player\` object is within the game screen.

~~~js
if (leftPressed && playerX >= 0) {
	velocityX = -movementSpeed;
} else if (rightPressed && playerX + player.width <= canvas.width) {
	velocityX = movementSpeed;
} else {
	velocityX = 0;
}
~~~

Lastly, in the \`Player\` class, I'll need to add an \`update()\` method to change the position of the \`player\` on screen.

~~~js
update() {
    if (this.image) {
		this.draw();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}
}
~~~

Wahoo! Movement!
![Game screenshot](/images/asteroid-run_project-thumbnail.webp)
### Player projectiles
I want the player to be able to press a key and have the ship fire a projectile vertically. So, I know that I'll have to create a projectile object with each key press at the location of the player, and that projectile also needs to have a velocity.

I will start by building a \`PlayerProjectile\` class. This time, I will pass the position and velocity to the constructor. Now, when the user presses the "fire" key, it will create a new \`PlayerProjectile\` object and provide the constructor with the player's location and a \`projectileSpeed\` value for its velocity. Because I want the player to fire more than one projectile, I'll store these objects in an array.

~~~js
class PlayerProjectile {
	constructor({ position, velocity }) {}
	// ...
}
~~~

~~~js
playerProjectiles.push(
	new PlayerProjectile({
		position: {
			x: playerX + halfPlayerWidth,
			y: playerY,
		},
		velocity: {
			x: 0,
			y: projectileSpeed,
		},
	})
);
~~~

Now we need something to shoot!
![Game screenshot](/images/asteroid-run_project-thumbnail.webp)

## Spawning Enemies

Just like before, I'll start with a class for the enemies and a function that creates objects, passes the constructor values, and stores them in an array.

To keep it interesting, I'll make use of \`Math.random()\` to give a random horizontal position to each new enemy object that's created.

~~~js
const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);

// constructor
this.position = {
	x: randomX,
	y: 0 - this.height,
};
~~~

For the enemies' movement, I'll have the velocity of the object change between positive and negative values for each axis.

~~~js
const randomDirectionX = (Math.floor(Math.random() * 3) - 1) * enemyMovementSpeed;

// constructor
if (this.position.x >= minX && this.position.x <= maxX) {
	this.velocity.x = randomDirectionX;
}
~~~

Back in the \`render\` function I'll add another randomized value for the duration between direction changes and a check to reverse the direction when an enemy object hits the edge of the game screen, to keep them within bounds.

~~~js
// render()
if (hitLeftEdge) {
  enemyVelocityX = enemyMovementSpeed;
} else if (hitRightEdge) {
  enemyVelocityX = -enemyMovementSpeed;
} else if (hitBottomEdge) {
  enemyVelocityY = -enemyMovementSpeed;
} else if (hitTopEdge) {
  enemyVelocityY = enemyMovementSpeed;
}
~~~

### Enemy Projectiles
The last bit of enemy behaviour I want to implement is projectiles. These will behave in a similar way as the player's but I'll add it to the randomized timing of the enemies direction. This isn't the greatest solution, I should write a separate loop for the projectiles, but to be honest I just want to get the basics of the game up and running.

~~~js
// render()
if (isTimeForAction) {
  enemy.fire(enemyProjectiles);
  enemy.enemyMovement();
}
~~~

Alright, but everyone's invincible... That's boring!

![Game screenshot](/images/asteroid-run_project-thumbnail.webp)

## Collision and game over

This part is a bit tedious, so to put it simply, I will obtain the dimensions and position of each element on the screen and check for any overlap between them.

~~~js
// shortend code for brevity
if (
	enemyTop <= playerBottom
	&&
  enemyRight >= playerLeft
	&&
	enemyLeft <= playerRight
	&&
	enemyBottom >= playerTop
) {
	player.splice(i, 1);
}
~~~

Now that I know when objects in the game touch, I can create a game over condition. I'll trigger the game over screen when the player collides with an enemy ship or an enemy projectile. I can simply add \`game.over = true;\` to the statement above.

~~~js
{
	player.splice(i, 1);
	game.over = true;
}
~~~

When the boolean is set to true, the player's opacity will be set to 0, all objects will be deleted, and the "game over" screen will be displayed.

I think it's also a good time to add a pruning check to delete any projectiles that venture out of bounds in order to reduce memory usage.

~~~js
if (projectileY + projectileHeight >= canvasHeight) {
	setTimeout(() => {
	  projectiles.splice(i, 1);
	}, 0);
}
~~~

## Scoring & Levels

Now that I have a player, some enemies, and the ability to shoot them, I have one last feature to add in order to call this a game. What should happen when the player shoots an enemy?

I will add a points system for tracking scores! When a player destroys an enemy, it will increment the value by a specified amount. Let's say, 100 points for hitting an enemy ship.

~~~js
gameScore += enemyValue;
levelKillCount++;
~~~

Actually, instead of just a flat value for the points, I'll use a variable to control how much to increment the points. While I'm here, I'll also add a counter for how many enemies I hit.

I can use the \`levelKillCount\` value to create levels for this game. I will create an object of key-value pairs, each containing a new value for \`enemySpawnRate\`, \`enemyMovementSpeed\`, \`enemyProjectileSpeed\`, \`enemyValue\`, and \`enemyType\`. After the player hits a specific number of enemies, the level will increase, making the game more difficult, and the enemies' color will change.

~~~js
const levels = {
	5: {
		init: () => {
			enemyType = Math.floor(currentLevel / 5);
			enemyMovementSpeed = enemyMovementIncrement;
			enemyProjectileSpeed = enemyProjectileIncrement
			enemySpawnRate = currentLevel;
			enemiesToNextLevel = currentLevel + 1;
		},
	},
}
~~~

Now, for some polish!
## Finishing touches

Now that I have the core functionality of the game complete, I'll add a few features to make this game feel more alive. The current black background doesn't make me feel like I'm flying a ship through space! So, let's fix that with a scrolling background made with [Pixel Space Background Generator](https://deep-fold.itch.io/space-background-generator).

And lastly, a few control graphics, a start screen, and a game over screen, complete with your score.

![Game screenshot](/images/asteroid-run_project-thumbnail.webp)`
    ]
  }
];

export const AsteroidRunData = {
  externalLinks,
  videoShowcase,
  techStack,
  article
};
