kaboom()

loadSprite("egg", "sprites/egg.png")
loadSprite("basicchickenfinal", "sprites/basicchickenfinal.png")

setBackground(3, 152, 252)



const egg = add([
	sprite("egg"),
	pos(width()/4 - 8, height()/2),
	anchor("center"),
	area(),
	'egg',
]);

var eggs = 0;
var basics = 0;

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

const basicchickenfinal = add([
	sprite("basicchickenfinal"),
	pos(1100,100),
	anchor("center"),
	area(),
	'basicchickenfinal',
]);

var basicchickensum = 0;

const basicchickenamount = add([
    text(basicchickensum),
    color(black),
    pos(1200,100),
    anchor("center"),



var basiccost = 10;


onClick('basicchickenfinal', (a) => {
	if (eggs >= basiccost) {
		basics = basics + 1
		debug.log(basics)
		eggs = eggs - basiccost
		wait(0.1, () => {
		basiccost = basiccost + 15
		loop(1, () => {
			eggs = eggs + 0.5;
				})
				})
				onUpdate(() => {
				basicchickensum = basicchickensum + 1;
					basicchickenamount.text = basicchickensum;
		})
	}
				})

