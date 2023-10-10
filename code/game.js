// Adding game objects to screen

// Start a kaboom game
kaboom()

// Load a sprite asset from "sprites/bean.png", with the name "bean"
loadSprite("bean", "/sprites/bean.png")
loadSprite("ghosty", "/sprites/ghosty.png")

setBackground(3, 152, 252)



const bean = add([
	sprite("bean"),
	pos(width()/4, height()/2),
	scale(6),
	anchor("center"),
	area(),
	'bean',
])
var beans = 0

var ghosts = 0

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
    pos(width()/2, -3),
    rect(width()/2, 10000),
    outline(8),
    area(),
	color()
])

const ghosty = add([
	sprite("ghosty"),
	pos(800,100),
	scale(3),
	anchor("center"),
	area(),
	'ghosty',
])



onClick('ghosty', (a) => {
	ghosts = ghosts + 1
});

if (ghosty = 1) {
	
	beans = beans + ghosty;
}
