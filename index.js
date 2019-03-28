var recipes = {
  Omlet : "eggs",
}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
