namespace SpriteKind {
    export const Updates = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.up.isPressed()) {
        Uppressed.setImage(img`
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 . . 5 5 . . . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . 5 5 . . . . . . 5 5 . . . 
            . . 5 5 . . . . . . . . 5 5 . . 
            . 5 5 . . . . . . . . . . 5 5 . 
            5 5 . . . . . . . . . . . . 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 5 5 5 5 5 . . 5 5 5 5 5 5 5 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            `)
        if (sprite.y >= 22 && sprite.y <= 26) {
            Update.sayText("Perfect", 100, false)
            info.changeScoreBy(10)
        } else {
            Update.sayText("OK", 100, false)
            info.changeScoreBy(1)
        }
        sprite.destroy()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.right.isPressed()) {
        Rightpressed.setImage(img`
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 . . 5 5 . . . . . 
            . . . . . . 5 . . . 5 5 . . . . 
            . . . . . . 5 . . . . 5 5 . . . 
            . . . . . . 5 . . . . . 5 5 . . 
            . . . . . . 5 . . . . . . 5 5 . 
            5 5 5 5 5 5 5 . . . . . . . 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 5 5 5 5 5 . . . . . . . 5 5 
            . . . . . . 5 . . . . . . 5 5 . 
            . . . . . . 5 . . . . . 5 5 . . 
            . . . . . . 5 . . . . 5 5 . . . 
            . . . . . . 5 . . . 5 5 . . . . 
            . . . . . . 5 . . 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            `)
        if (sprite.y >= 22 && sprite.y <= 26) {
            Update.sayText("Perfect", 100, false)
            info.changeScoreBy(10)
        } else {
            Update.sayText("OK", 100, false)
            info.changeScoreBy(1)
        }
        sprite.destroy()
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprite.destroy()
    info.changeScoreBy(-10)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.left.isPressed()) {
        Leftpressed.setImage(img`
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 . . 5 . . . . . . 
            . . . . 5 5 . . . 5 . . . . . . 
            . . . 5 5 . . . . 5 . . . . . . 
            . . 5 5 . . . . . 5 . . . . . . 
            . 5 5 . . . . . . 5 . . . . . . 
            5 5 . . . . . . . 5 5 5 5 5 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 . . . . . . . 5 5 5 5 5 5 5 
            . 5 5 . . . . . . 5 . . . . . . 
            . . 5 5 . . . . . 5 . . . . . . 
            . . . 5 5 . . . . 5 . . . . . . 
            . . . . 5 5 . . . 5 . . . . . . 
            . . . . . 5 5 . . 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            `)
        if (sprite.y >= 22 && sprite.y <= 26) {
            Update.sayText("Perfect", 100, false)
            info.changeScoreBy(10)
        } else {
            Update.sayText("OK", 100, false)
            info.changeScoreBy(1)
        }
        sprite.destroy()
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    Downpressed.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Rightpressed.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    Leftpressed.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    Uppressed.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.down.isPressed()) {
        Downpressed.setImage(img`
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            5 5 5 5 5 5 5 . . 5 5 5 5 5 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 . . . . . . . . . . . . 5 5 
            . 5 5 . . . . . . . . . . 5 5 . 
            . . 5 5 . . . . . . . . 5 5 . . 
            . . . 5 5 . . . . . . 5 5 . . . 
            . . . . 5 5 . . . . 5 5 . . . . 
            . . . . . 5 5 . . 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            `)
        if (sprite.y >= 22 && sprite.y <= 26) {
            Update.sayText("Perfect", 100, false)
            info.changeScoreBy(10)
        } else {
            Update.sayText("OK", 100, false)
            info.changeScoreBy(1)
        }
        sprite.destroy()
    }
})
function setuppressedarrows () {
    Leftpressed = sprites.create(img`
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 . . 5 . . . . . . 
        . . . . 5 5 . . . 5 . . . . . . 
        . . . 5 5 . . . . 5 . . . . . . 
        . . 5 5 . . . . . 5 . . . . . . 
        . 5 5 . . . . . . 5 . . . . . . 
        5 5 . . . . . . . 5 5 5 5 5 5 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 5 . . . . . . . 5 5 5 5 5 5 5 
        . 5 5 . . . . . . 5 . . . . . . 
        . . 5 5 . . . . . 5 . . . . . . 
        . . . 5 5 . . . . 5 . . . . . . 
        . . . . 5 5 . . . 5 . . . . . . 
        . . . . . 5 5 . . 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `, SpriteKind.Updates)
    tiles.placeOnTile(Leftpressed, tiles.getTileLocation(1, 1))
    Leftpressed.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Downpressed = sprites.create(img`
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        5 5 5 5 5 5 5 . . 5 5 5 5 5 5 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 5 . . . . . . . . . . . . 5 5 
        . 5 5 . . . . . . . . . . 5 5 . 
        . . 5 5 . . . . . . . . 5 5 . . 
        . . . 5 5 . . . . . . 5 5 . . . 
        . . . . 5 5 . . . . 5 5 . . . . 
        . . . . . 5 5 . . 5 5 . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `, SpriteKind.Updates)
    tiles.placeOnTile(Downpressed, tiles.getTileLocation(3, 1))
    Downpressed.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Uppressed = sprites.create(img`
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 . . 5 5 . . . . . 
        . . . . 5 5 . . . . 5 5 . . . . 
        . . . 5 5 . . . . . . 5 5 . . . 
        . . 5 5 . . . . . . . . 5 5 . . 
        . 5 5 . . . . . . . . . . 5 5 . 
        5 5 . . . . . . . . . . . . 5 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 5 5 5 5 5 5 . . 5 5 5 5 5 5 5 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `, SpriteKind.Updates)
    tiles.placeOnTile(Uppressed, tiles.getTileLocation(6, 1))
    Uppressed.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Rightpressed = sprites.create(img`
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 . . 5 5 . . . . . 
        . . . . . . 5 . . . 5 5 . . . . 
        . . . . . . 5 . . . . 5 5 . . . 
        . . . . . . 5 . . . . . 5 5 . . 
        . . . . . . 5 . . . . . . 5 5 . 
        5 5 5 5 5 5 5 . . . . . . . 5 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 5 5 5 5 5 5 . . . . . . . 5 5 
        . . . . . . 5 . . . . . . 5 5 . 
        . . . . . . 5 . . . . . 5 5 . . 
        . . . . . . 5 . . . . 5 5 . . . 
        . . . . . . 5 . . . 5 5 . . . . 
        . . . . . . 5 . . 5 5 . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `, SpriteKind.Updates)
    tiles.placeOnTile(Rightpressed, tiles.getTileLocation(8, 1))
    Rightpressed.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
let Right: Sprite = null
let Up: Sprite = null
let Down: Sprite = null
let Left: Sprite = null
let Random = 0
let Downpressed: Sprite = null
let Leftpressed: Sprite = null
let Rightpressed: Sprite = null
let Uppressed: Sprite = null
let Update: Sprite = null
tiles.setTilemap(tilemap`level1`)
let Speed = -30
Update = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Update, tiles.getTileLocation(4, 1))
info.setScore(100)
setuppressedarrows()
game.onUpdateInterval(1000, function () {
    Random = randint(1, 4)
    if (Random == 1) {
        Left = sprites.create(img`
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 1 1 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . 1 1 1 1 1 1 . . . . . . . 
            . . 1 1 1 1 1 1 1 . . . . . . . 
            . 1 1 1 1 1 1 1 1 . . . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 1 1 . . . . . . . 
            . . 1 1 1 1 1 1 1 . . . . . . . 
            . . . 1 1 1 1 1 1 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . . 1 1 1 1 . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(Left, tiles.getTileLocation(1, 7))
        Left.vy = Speed
    } else if (Random == 2) {
        Down = sprites.create(img`
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(Down, tiles.getTileLocation(3, 7))
        Down.vy = Speed
    } else if (Random == 3) {
        Up = sprites.create(img`
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(Up, tiles.getTileLocation(6, 7))
        Up.vy = Speed
    } else {
        Right = sprites.create(img`
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 1 1 . . . . 
            . . . . . . . 1 1 1 1 1 1 . . . 
            . . . . . . . 1 1 1 1 1 1 1 . . 
            . . . . . . . 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . . . . . . 1 1 1 1 1 1 1 1 . 
            . . . . . . . 1 1 1 1 1 1 1 . . 
            . . . . . . . 1 1 1 1 1 1 . . . 
            . . . . . . . 1 1 1 1 1 . . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(Right, tiles.getTileLocation(8, 7))
        Right.vy = Speed
    }
    Speed += -1
})
