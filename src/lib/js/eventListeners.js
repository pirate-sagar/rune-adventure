import { keys } from '$lib/store/keys.svelte'

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'w':
        keys.keys.w.pressed = true
        break
      case 'a':
        keys.keys.a.pressed = true
        break
      case 's':
        keys.keys.s.pressed = true
        break
      case 'd':
        keys.keys.d.pressed = true
        break

      case ' ':
        event.preventDefault()
        player.attack()
        break
    }
  })

  window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'w':
        keys.keys.w.pressed = false
        break
      case 'a':
        keys.keys.a.pressed = false
        break
      case 's':
        keys.keys.s.pressed = false
        break
      case 'd':
        keys.keys.d.pressed = false
        break
    }
  })

  // On return to game's tab, ensure delta time is reset
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      lastTime = performance.now()
    }
  })
}
