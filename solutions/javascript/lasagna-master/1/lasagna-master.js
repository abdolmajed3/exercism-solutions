/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(status) {
  if (status === 0) {
    return 'Lasagna is done.'
  }
  if (status > 0) {
    return 'Not done, please wait.'
  }
  return 'You forgot to set the timer.'
}

export function preparationTime(params, avg) {
  if (avg) {
    return params.length * avg
  } else {
    return params.length * 2
  }
}

export function quantities(params) {
  let noodles = 0
  let sauce = 0
  for (let i = 0; i < params.length; i++) {
    if (params[i] == 'noodles') {
      noodles += 50
    }
    if (params[i] == 'sauce') {
      sauce += 0.2
    }
  }
  return { noodles : noodles, sauce: sauce }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, scale) {
  let newRecipe = {};
  for (let key in recipe){
    newRecipe[key] = recipe[key] * (scale/2);
  }
  return newRecipe;
}