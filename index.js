var recipes = {}; 
function updateObjectWithKeyAndValue(object, key, value){
 var newRecipes = Object.assign({}, {key: value});
 return newRecipes;
}
