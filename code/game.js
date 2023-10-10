
// Adding game objects to screen

// Start a kaboom game
kaboom()

// Load a sprite asset from "sprites/bean.png", with the name "bean"
loadSprite("bean", "/sprites/bean.png")

setBackground(3, 152, 252)



const bean = add([
	sprite("bean"),
	pos(300,550),
	scale(6),
	anchor("center"),
	area(),
	'bean',
])
var beans = 0

const beantext = add([
	text(beans),
	pos(300,300),
	color(BLACK),
	scale(4),
	anchor("center"),

	])

onClick('bean', (a) => {
	beans = beans + 1;
	debug.log(beans);
	beantext.text = beans
	
});

add([
    pos(700, -3),
    rect(500, 10000),
    outline(4),
    area(),
])

