'use strict';

var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing \
elit. Vivamus ut tincidunt nibh, in aliquam dolor. Maecenas ut felis ut \
metus gravida porta. Maecenas massa quam, eleifend vel nisi id, pharetra \
consequat lacus. Nulla elit ante, euismod ornare ante sit amet, aliquam \
interdum ex. Sed aliquam mi eu molestie feugiat. Maecenas ac molestie \
felis. Etiam pulvinar vitae libero et dapibus. Cras eget ipsum aliquam \
augue lobortis vehicula sed non lacus. Sed interdum imperdiet turpis, non \
mattis libero eleifend sed. Duis sollicitudin dui vitae laoreet \
finibus. Pellentesque at arcu vel libero lacinia imperdiet nec sit amet \
nisl. Ut commodo vulputate eros, sit amet aliquet mi aliquet a. Vivamus \
ullamcorper mauris vitae condimentum volutpat.";


var words = paragraph.split(/\s+/);

var uniqueWords = { };

for (var i = 0; i < words.length; i++) {
  words[i] = words[i].replace(/\W/g,'').toLowerCase();
  uniqueWords[words[i]] = true;
}

words = [];

for (var k in uniqueWords) {
  words.push(k);
}

console.log(words);

/*
  //an alternate way make an array from keys
  var keys= [], j = 0;
  for (keys[j++] in uniqueWordsAsKeys) {;}
*/

