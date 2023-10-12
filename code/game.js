kaboom()

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
]);

var beans = 0;
var ghosts = 0;

const beantext = add([
	text(beans),
	pos(300,300),
	color(BLACK),
	scale(2),
	anchor("center"),
]);

onClick('bean', (a) => {
	beans = beans + 1;
	debug.log(beans);
	onUpdate(() =>{
		
	beantext.text = beans;
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
	scale(3),
	anchor("center"),
	area(),
	'ghosty',
]);

var ghostcost = 10;

onClick('ghosty', (a) => {
	if (beans >= ghostcost) {
		ghosts = ghosts + 1
		debug.log(ghosts)
		beans = beans - ghostcost
		wait(0.1, () => {
		var ghostcost = ghostcost + 100
		loop(1, () => {
			beans = beans + 0.5;
					})
		})
				 }
				})

