export const trunc = function(string, max = 18) {
  return string.length >= max ? `${string.slice(0, max)}...` : string
}
