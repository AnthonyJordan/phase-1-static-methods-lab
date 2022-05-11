class Formatter {
  //add static methods here
  static capitalize(string) {

    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }
  static titleize(string) {
    const splitString = string.split(" ")
    const lowerWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const returnValue = []
    returnValue.push(this.capitalize(splitString[0]))
    for (let i = 1; i < splitString.length; i++) {
      if (lowerWords.includes(splitString[i])) {
        returnValue.push(splitString[i])
      } else {
        returnValue.push(this.capitalize(splitString[i]))
      }
    }
    return returnValue.join(" ")
  }
}