import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'


type HEX = `#${string}`;

type Color = HEX;

const showMessageBackgroundColor: Color = '#1568E5'
const smallButtonBackgroundColor: Color = '#FD3944'

const StyledButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement> & { showMessage?: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: ${({ showMessage }) => (showMessage ? '18px' : '14px')};
  font-family: 'Inter', sans-serif;
  border-style: none;
  background-color: ${({ theme, showMessage }) =>
    showMessage ? showMessageBackgroundColor : smallButtonBackgroundColor};
  color: white;
  border-radius: ${({ showMessage }) => (showMessage ? '25px' : '50%')};
  min-width: ${({ showMessage }) => (showMessage ? '140px' : '25px')};
  height: ${({ showMessage }) => (showMessage ? '70px' : '25px')};
  transition: all 0.05s ease-in;

  &::before {
    content: '';
    position: absolute;
    top: 85%;
    right: -3%;
    margin-top: -8px;
    border-style: solid;
    border-width: 14px 0 0px 24px;
    border-color: transparent transparent transparent
      ${({ theme, showMessage }) => (showMessage ? showMessageBackgroundColor : smallButtonBackgroundColor)};
    visibility: ${({ showMessage }) => (showMessage ? 'visible' : 'hidden')};
  }
`
  /**
   * Returns floating action button which is a button for support.
   *
   * 
   * 
   *
   * @param changeShowMessage - It's a function that will change showMessage state to the contrary condition.
   * @param showMessage - It's a state to control button UI & functionality.
   * @returns A floating action button component that will stay still in right-bottom corner of screen.
   *
   * @beta
   */
export default function FloatingActionButton({
  changeShowMessage,
  showMessage
}: {
  changeShowMessage: Function
  showMessage: boolean
}) {
  const handleClick = () => {
    if (showMessage) {
      const newWindow = window.open('https://t.me/mxcchatgpt_bot')
      if (newWindow) newWindow.opener = null
    } else {
      changeShowMessage(!showMessage)
    }
  }

  return (
    <StyledButton showMessage={showMessage} onClick={handleClick}>
      <span>{showMessage ? 'Need help ?' : '1'}</span>
    </StyledButton>
  )
}
