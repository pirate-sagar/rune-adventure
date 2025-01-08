import { Player } from '$lib/classes/Player'

export const player = $state({
    player: new Player({
        x: 100,
        y: 100,
        size: 15,
    })
});