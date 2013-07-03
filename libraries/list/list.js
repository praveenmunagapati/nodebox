var list = {};

// Combine multiple lists into one.
list.combine = function () {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        if (l) {
            result = result.concat(l);
        }
    }
    return result;
};

// Count the number of items in the list.
list.count = _.size;

// Remove all items where the corresponding boolean is false.
list.cull = function (l, booleans) {
    if (_.isEmpty(l)) return [];
    if (_.isEmpty(booleans)) return l;
    var results = [];
    for (var i = 0; i < l.length; i++) {
        // Cycle through the list of boolean values.
        var keep = booleans[i % booleans.length];
        if (keep) {
            results.push(l[i]);
        }
    }
    return results;
};

// Remove all duplicate items from the list.
list.distinct = _.uniq;

// Take the first item of the list.
list.first = _.first;

// Take the last item of the list.
list.last = _.last;

// Pick items from the list in random order.
list.pick = function (l, amount, seed) {
    if (_.isEmpty(l) || amount <= 0) return [];
    var rand = core.randomGenerator(seed);
    var results = [];
    for (var i = 0; i < amount; i++) {
        results.push(l[Math.floor(rand(0, l.length))]);
    }
    return results;
};

// Repeat the list a number of times. If perItem, item 1 will be repeated first, then item 2, and so on.
list.repeat = function (l, amount, perItem) {
    if (amount <= 0) return [];
    var newList = [];
    if (!perItem) {
        _.times(amount, function () {
            newList.push.apply(newList, l);
        });
    } else {
        _.map(l, function (v) {
            for (var i = 0; i < amount; i++) {
                newList.push(v);
            }
        });
    }
    return newList;
};

// Take all but the first item of the list.
list.rest = _.rest;

// Reverse the list.
list.reverse = function (l) {
    return _.clone(l).reverse();
};

// Take the second item of the list.
list.second = function (l) {
    if (l != null && l.length >= 2) {
        return l[1];
    } else {
        return null;
    }
};

// Take a portion of the original list.
list.slice = function (l, startIndex, size, invert) {
    if (l == null) return [];

    if (!invert) {
        return l.slice(startIndex, startIndex + size);
    } else {
        var firstList = l.slice(0, startIndex);
        var secondList = l.slice(startIndex + size);
        return firstList.concat(secondList);
    }
};
