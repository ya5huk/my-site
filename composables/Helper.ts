export const pretifyDate = (date: string, lang: string) => {
  /**
   * Function just makes date more readable, lang should be en_US or he_IL
   */
  let d, m, y;
  if (lang === 'en_US') {
    [m, d, y] = date.split('/')
  } else {
    [d, m, y] = date.split('/')
  }

  const newDate = new Date(`${m}/${d}/${y}`)

  return newDate.toLocaleDateString(lang.replace('_', '-'), {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const scrollToTop = () => {
  /**
   * Scroll to top smoothly
   */
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}