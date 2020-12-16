var stack1 = "stack1";
    function move(curStack) {
        var oldStack = document.getElementById(stack1).style;
        oldStack.zIndex = "0";
        var newStack = document.getElementById(curStack).style;
        newStack.zIndex = "10";
        stack1 = document.getElementById(curStack).id;
 }
   