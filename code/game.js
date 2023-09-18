kaboom()

loadSprite("bean", "sprites/bean.png")
loadSprite("ghosty", "sprites/ghosty.png")
loadSprite("steel", "sprites/steel.png")

const nucleus = add([
	sprite("ghosty"),
	pos(center()),
	anchor("center"),
])

// Add children
for (let i = 12; i < 24; i++) {

	nucleus.add([
		sprite("bean"),
		rotate(0),
		anchor(vec2(i).scale(0.25)),
		{
			speed: i * 8,
		},
	])

}

nucleus.onUpdate(() => {

	nucleus.pos = mousePos()

	// update children
	nucleus.children.forEach((child) => {
		child.angle += child.speed * dt()
		
	})

})
for (let i = 0; i < 3; i++) {

	const x = rand(0, width())
	const y = rand(0, height())


add([
		sprite("steel"),
		pos(x, y),
		// Both objects must have area() component to enable collision detection between
		area(),
		"enemy",
	])

