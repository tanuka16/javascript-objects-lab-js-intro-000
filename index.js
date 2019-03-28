var recipes = {
  Omlet : "eggs",
}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object.
  object[key] = value

  return object
}
