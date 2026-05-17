/**
 * 責務: 既定テーマを拡張し、天象儀／投影機の世界観用グローバル CSS を読み込む。
 */

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

const extendedTheme = {
  extends: DefaultTheme,
} satisfies Theme

export default extendedTheme
