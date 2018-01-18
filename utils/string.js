export const trunc = function(string, max = 18) {
  return string.length >= max ? `${string.slice(0, max)}...` : string
}

export const token = (length=10) => {
  const c ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return [...Array(length)].map(() => c[Math.floor(Math.random() * c.length)]).join('')
}
