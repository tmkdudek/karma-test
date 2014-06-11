(function(){

    var elementById = function(id)
    {
        return document.getElementById(id);
    };

    var elementsByClass = function(className)
    {
        //return document.getElementsByClassName(className);

        if(typeof document.getElementsByClassName == 'undefined')
        {
            return document.querySelectorAll('.'+className);
        }else{
            return document.getElementsByClassName(className);
        }

    };


    var trim = function(str){
        //return str.trim();

        if(typeof String.prototype.trim !== 'function') {
            return str.replace(/^\s+|\s+$/g, '');
        }else{
            return str.trim();
        }

    };

    var indexOf = function(arr,element){
        //return arr.indexOf(element);
        if(typeof Array.indexOf =='undefined')
        {
            for(var i in arr)
            {
                if(arr[i] === element)
                {
                    return parseInt(i) || i;
                }
            }
        }else{
            return arr.indexOf(element);
        }
    };



    MyLib = {
        elementById     : elementById,
        elementsByClass  : elementsByClass,
        trim            : trim,
        indexOf      : indexOf
    }



})()