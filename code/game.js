kaboom()

loadSprite("egg", "sprites/egg.png")
loadSprite("ghosty", "sprites/ghosty.png")

setBackground(3, 152, 252)



const egg = add([
	sprite("egg"),
	pos(width()/4, height()/2),
	anchor("center"),
	area(),
	'egg',
]);

var eggs = 0;
var ghosts = 0;

const eggtext = add([
	text(eggs),
	pos(width()/4, height()/4),
	color(BLACK),
	scale(2),
	anchor("center"),
]);

onClick('egg', (a) => {
	eggs = eggs + 1;
	onUpdate(() => {
	eggtext.text = eggs;
		})
});

add([
    pos(width()/2, -3),
    rect(width()/2, 10000),
    outline(8),
    area(),
	color(),
]);

const ghosty = add([
	sprite("ghosty"),
	pos(800,100),
	scale(2),
	anchor("center"),
	area(),
	'ghosty',
]);

var ghostcost = 10;


onClick('ghosty', (a) => {
	if (eggs >= ghostcost) {
		ghosts = ghosts + 1
		debug.log(ghosts)
		eggs = eggs - ghostcost
		wait(0.1, () => {
		ghostcost = ghostcost + 15
		loop(1, () => {
			eggs = eggs + 0.5;
					  })
						})
							}
						})

