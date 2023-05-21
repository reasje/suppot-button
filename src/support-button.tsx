import { useState } from 'react'
import StyledButton from './styled-button'
import useShowMessage from './store'

export function FloatingActionButton() {
  const [state, setState] = useShowMessage()

  const handleClick = () => {
    if (state) {
      const newWindow = window.open('https://t.me/mxcchatgpt_bot')
      if (newWindow) newWindow.opener = null
    } else {
      setState(!state)
    }
  }

  return (
    <StyledButton showMessage={state} onClick={handleClick}>
      <span>{state ? 'Need help ?' : '1'}</span>
    </StyledButton>
  )
}
