/**
 * Created by Kasper on 14-02-2016.
 */
var counter = (function(){
    var i = 0;

    return {
        get: function(){
            return i;
        },
        set: function( val ){
            i = val;
        },
        increment: function() {
            return ++i;
        }
    };
})();

// 'counter' is an object with properties, which in this case happens to be
// methods.

counter.get(); // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5