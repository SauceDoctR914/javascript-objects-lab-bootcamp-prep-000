var recipes = {}; 
function updateObjectWithKeyAndValue(object, key, value){
 var newRecipes = Object.assign({}, object, {[key] : value});
 return newRecipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return objec;
}
function deleteFromObjectByKey(object, key){
  var newRecipes = Object.assign({}, object)
  delete newRecipes['key'];
  return newRecipes;
}


