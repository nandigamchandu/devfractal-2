import React from 'react'
import { classNames } from '@stp/devfractal'

export const MenuBurger: React.FC<any> = ({ isMinimal, onClick }) => (
  <a
    href="#!"
    className={classNames('menu-burger', { minimal: isMinimal })}
    onClick={onClick}
  >
    <span />
    <span />
    <span />
  </a>
)
