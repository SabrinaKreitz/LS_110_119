// 
/* 25 minutes 
The function should return an array that contains only the id and title of each movie that has both an id and a title property. The array that the function returns should not contain any objects that don't have both properties. Furthermore, the objects should be in the same order as they appear in the original data array.


Algorithm: 
1. Select the nested objects of an array that have both and id and title property as a new array
2. Transform the new array, so that each object only contains the title and id property 

Create selectedReleases array and set to 
  Iterate through input array 
  Return elements that have both the `title` and `id` property 
Create transformedReleases array and set to 
  Iterate through selectedReleases array
  Return new objects with the `id` and `title` property and their values 
Return transformedReleases
*/

function processReleaseData (newReleases) {
  let selectedReleases = newReleases.filter(obj => obj.hasOwnProperty('id') && obj.hasOwnProperty('title')); 

  let transformedReleases = selectedReleases.map(obj => ({id: obj.id,  title: obj.title}) ); 
  return transformedReleases; 
}


let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }],
  },
];




processReleaseData(newReleases);
// should return:
// [
//   { id: 70111470, title: 'Die Hard' },
//   { id: 675465, title: 'Fracture' }
// ]