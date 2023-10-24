import { useTheme } from 'next-themes'
import { Button } from './Button'

export function SwitchTheme() {
  const { theme, setTheme } = useTheme()

  function handleSwitchTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const themeName = theme === 'light' ? 'Dark' : 'Light'

  return (
    <Button variant="ghost" onClick={handleSwitchTheme}>
      Change to {themeName} mode
    </Button>
  )
}
