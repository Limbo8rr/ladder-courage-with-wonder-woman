scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.startCountdown(20)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    for (let index = 0; index < 100; index++) {
        music.knock.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeLifeBy(-10)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f f f 2 2 f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . . . 
    . . . f f d d d d f f . . . . . 
    . . . f f d d d d f f . . . . . 
    . . . . f d d d d f . . . . . . 
    . . . . . . d d . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 5 2 2 2 2 5 . . . . . . 
    . . . . d 2 2 2 2 d . . . . . . 
    . . . . . 8 . . 8 . . . . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level6`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
scene.cameraFollowSprite(mySprite)
info.setLife(20)
