

type Theme = {
  themeName: string,
  colorScheme: {
    primary?: string,
    onPrimary?: string,
    secondary?: string,
    onSecondary?: string,
    tertiary?: string,
    onTertiary?: string,
    surface?: string,
    onSurface?: string,
    background?: string,
    error?: string,
    warn?: string,
  },
  prevColorSchema?: Record<never, string> | undefined
}

export default Theme;
