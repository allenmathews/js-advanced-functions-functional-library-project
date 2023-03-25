const fi = (function() {
    return {
        libraryMethod: function() {
            return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
        },

        each: function(iterable, callback) {
            for (const index in iterable) {
                callback(iterable[index]);
            }
            return iterable;
        },

        map: function(iterable, callback) {
            let result = [];
            for (const index in iterable) {
                result.push(callback(iterable[index]));
            }
            return result;
        },

        reduce: function(collection, callback, acc) {
            let i;
            if (acc === undefined) {
                acc = collection[0];
                i = 1;
            } else {
                i = 0;
                acc = acc;
            }
            for (i; i < collection.length; i++) {
                acc = callback(acc, collection[i], collection);
            }
            return acc;
        },

        find: function(collection, predicate) {
            for (const index in collection) {
                if (predicate(collection[index])) return collection[index];
            }
            return undefined;
        },

        filter: function(collection, predicate) {
            let result = [];
            for (const index in collection) {
                if (predicate(collection[index])) result.push(collection[index]);
            }
            return result;
        },

        size: function(collection) {
            let count = 0;
            for (const index in collection) {
                count++;
            }
            return count;
        },

        first: function(array, n) {
            let result = [];
            if (n === undefined) return array[0];

            let i = 0;
            while (i < n) {
                result.push(array[i]);
                i++;
            }
            return result;
        },

        last: function(array, n) {
            let result = [];
            if (n === undefined) return array[array.length - 1];

            let i = array.length - n;
            while (i < array.length) {
                result.push(array[i]);
                i++;
            }
            return result;
        },

        compact: function(array) {
            let result = [];
            for (const item of array) {
                if (Boolean(item)) result.push(item);
            }

            return result;
        },

        sortBy: function(array, callback) {
            let result = [];
            for (const element of array) {
                result.push(callback(element));
            }
            let sorted = result.slice();
            sorted.sort((a, b) => a - b);
            let sortedBy = [];
            for (const element of sorted) {
                sortedBy.push(array[result.indexOf(element)]);
            }
            return sortedBy;
        },

        flatten: function(array, shallow) {
            let result = [];
            let traverse = function(current, level) {
                if (Array.isArray(current) && level > 0) {
                    for (let i = 0; i < current.length; i++) {
                        traverse(current[i], level - 1);
                    }
                } else result.push(current);
            };

            let level = Number.MAX_SAFE_INTEGER;
            if (shallow) level = 2;
            traverse(array, level);
            console.log(result);
            return result;
        },

        uniq: function(array, isSorted, callback) {
            let uniq = [];
            let result = [];

            for (const element of array) {
                if (!uniq.includes(element))
                    uniq.push(element);
            }
            if (callback) {
                let transfered = [];
                for (const element of uniq) {
                    if (!transfered.includes(callback(element))) {
                        transfered.push(callback(element));
                        result.push(element);
                    }
                }
            } else {
                result = uniq;
            }
            console.log(result);
            return result;
        },

        keys: function(obj) {
            let result = [];
            for (const key in obj) {
                result.push(key);
            }
            return result;
        },

        values: function(obj) {
            let result = [];
            for (const key in obj) {
                result.push(obj[key]);
            }
            return result;
        },

        functions: function(obj) {
            let result = [];
            for (const key in obj) {
                if (typeof obj[key] === 'function')
                    result.push(key);
            }
            result.sort();
            return result;
        },

        key: 1,
    };
})();

fi.libraryMethod();