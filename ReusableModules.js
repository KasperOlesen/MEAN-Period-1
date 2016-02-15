/**
 * Created by Kasper on 14-02-2016.
 */

var personInfo = function(){
    var person = {name: "Kasper", age: 69};
    function setAge(val){
        person.age = val;
    }
    function setName(val){
        person.name = val;
    }
    function getInfo(){
        return person.name + " " + person.age;
    }
    return {
        setAgeFunc: function(val){setAge(val);},
        setNameFunc: function(val){setName(val);},
        getInfoFunc: function(){return getInfo();}
    }
};

console.log(personInfo().getInfoFunc());