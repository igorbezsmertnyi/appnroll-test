import { Theme } from "./theme"

export const textColor = (name: keyof Theme["color"]["text"]) => ({
  theme,
}: {
  theme: Theme
}) => theme.color.text[name]

export const backgroundColor = (name: keyof Theme["color"]["background"]) => ({
  theme,
}: {
  theme: Theme
}) => theme.color.background[name]

export const otherColor = (name: keyof Theme["color"]["others"]) => ({
  theme,
}: {
  theme: Theme
}) => theme.color.others[name]

export const fontFamily = (name: keyof Theme["fontFamily"]) => ({
  theme,
}: {
  theme: Theme
}) => theme.fontFamily[name]

export const breakpoint = (name: keyof Theme["breakpoint"]) => ({
  theme,
}: {
  theme: Theme
}) => theme.breakpoint[name]
