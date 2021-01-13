/*
Iterables & iterators:

Array, String, Aruguments object, Map, Set are Iterables.

Iterator: Is a special object that provides access to a collection of items one at a time and
keep tracks of which items has been accessed.

All iterators contain a next() method, when next() method is invoked, an object is
returned with 2 keys, value and done (boolean, equals true only when iterator is finished
iterating the collection)
*/


let mySet = new Set(['a', 'b', 'c']);
let setItems = mySet.entries();

// In this case, setItems variable contains a iterator since entries() method
// of a set returns an iterator.

console.log(setItems.next()); // outputs { value: [ 'a', 'a' ], done: false }

// since iterator is same in Set and Map, Set mimics [key, value] Map behaviours and hence outputs
// an array with the [value, value] and done is false as there is more to be interated. 

console.log(setItems.next());

// Iterators are very similar to loop but we have control over the when to invoke the
// next method.