const sizes = {
  phoneMini: '320px',
  phoneSmall: '360px',
  phone: '375px',
  phoneWide: '384px',
  phablet: '414px',
  tabletSmall: '480px',
  tablet: '640px',
  tabletWide: '750px',
  desktop: '900px',
  desktopWide: '1200px',
}
export const media = {
  phone: `(min-width: ${sizes.phoneMini}`,
  phoneMini: `(min-width: ${sizes.phoneMini})`,
  phoneSmall: `(min-width: ${sizes.phoneSmall})`,
  phoneWide: `(min-width: ${sizes.phoneWide})`,
  phablet: `(min-width: ${sizes.phablet})`,
  tablet: `(min-width: ${sizes.tabletSmall})`,
  tabletSmall: `(min-width: ${sizes.tabletSmall})`,
  tabletWide: `(min-width: ${sizes.tabletWide})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopWide: `(min-width: ${sizes.desktopWide})`,
}
