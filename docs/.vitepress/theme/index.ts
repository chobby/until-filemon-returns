/**
 * Purpose: extend the default theme and load global CSS for the planetarium / projector look.
 */

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

const extendedTheme = {
  extends: DefaultTheme,
} satisfies Theme

export default extendedTheme
