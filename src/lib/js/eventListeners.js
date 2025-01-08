import { keys } from '$lib/store/keys.svelte'
import { player } from '$lib/store/player.svelte'
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch (event.key) {
      case 'w':
        keys.w.pressed = true
        break
      case 'a':
        keys.a.pressed = true
        break
      case 's':
        keys.s.pressed = true
        break
      case 'd':
        keys.d.pressed = true
        break
      case ' ':
        event.preventDefault()
        player.player.attack()
        break
    }
  })

  window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'w':
        keys.w.pressed = false
        break
      case 'a':
        keys.a.pressed = false
        break
      case 's':
        keys.s.pressed = false
        break
      case 'd':
        keys.d.pressed = false
        break
    }
  })

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      lastTime = performance.now()
    }
  })
}
