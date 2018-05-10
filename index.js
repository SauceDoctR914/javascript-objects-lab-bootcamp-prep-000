var recipes = {}; 
function updateObjectWithKeyAndValue(object, key, value){
 recipes[key] = value;
 var newRecipes = Object.assign({}, recipes);
 return newRecipes;
}
