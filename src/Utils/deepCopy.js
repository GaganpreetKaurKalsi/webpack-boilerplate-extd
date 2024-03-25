function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let copy
  if (Array.isArray(obj)) {
    copy = []
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i])
    }
  } else {
    copy = {}
    for (let key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key])
      }
    }
  }

  return copy
}

export { deepCopy }
