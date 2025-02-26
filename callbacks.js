// Before you get started, we're going to load this file into our index.html file so we can see our console.logs show up in the browser like we did yesterday! 
  // To do this, open up your index.html file in your favorite text editor. 
  // Uncomment the script for today's callback exercises. 
  // You can go ahead and comment out other scripts so that your console doesn't get unnecessarily cluttered.


// ********** CALLBACK EXERCISES **********

// Let's do a quick review of functions. 
// Remember that a function is just a block of code that we've created but not invoked yet. 
// An analogy for this is a recipe. Writing a function is like writing a recipe. Invoking a function is like actually baking that recipe. Another way of thinking of this is that the function is a set of instructions, but we haven't yet carried out those instructions. 

// 1. Create a very basic function called funcInvoker. This isn't a complex function, it just has one simple task. It's going to have two parameters: funcToInvoke, and argToInvokeWith. As you may have already guessed, funcToInvoke is a function (any function!) that the user passes in to us. And argToInvokeWith is an argument (any argument!) that the user gives us to invoke that function with. All our basic little function has to do is invoke funcToInvoke with argToInvokeWith. 
  // Example invocation: 
  var addToTen = function(num1) {
    console.log('just invoked addToTen with',num1,'and 10, resulting in', 10 + num1);
  };
  // funcInvoker(addToTen, 5); //'just invoked addToTen with 5 and 10, resulting in 15'
// This might not seem like much, and in fact, that's the point! This is functional programming: you passed a function into another function as an argument. That's all it takes. 

function funcInvoker(funcToInvoke, argToInvokeWith) {
  return funcToInvoke(argToInvokeWith);
}

// 2. Let's create a function called breadMaker. This function takes in a single argument, and then console.logs 'mmm, fresh baked ' + argName + ' bread.'
// Obviously, you won't see anything appear in your console because we haven't invoked it yet!

function breadMaker(argName) {
  console.log("mmm, fresh baked " + argName + " bread.");
}

// 3. Now let's create an ingredientsArray with four different ingredients in it. Mine would be var ingredientsArray = ['quinoa','banana','zucchini', 'guacamole'];. Clearly I'm not much of a breadbaker!

var ingredientsArray = ['chocolate', 'banana', 'garlic', 'raisin'];

// 4. Using a for loop, invoke breadMaker on each item in the array. What do you see in your console?
// At this point, you might be kind of bored. Because this is exactly what we've been doing all along. That's great! Because this leads us into functional programming. 


// for (i=0; i < ingredientsArray.length; i++) {
//   breadMaker(ingredientsArray[i]);

//}

// Let's go through and refactor our code in a couple different ways. 
// 5. First, within each iteration, let's use funcInvoker instead of just using breadMaker directly. funcInvoker should be passed the function that we want it to invoke, as well as the argument we want passed into that function. 


// for (i=0; i < ingredientsArray.length; i++) {
//   funcInvoker(breadMaker, ingredientsArray[i]);

//}

// Again, funcInvoker is not the most useful function in the world, but it should teach you how approachable and non-intimidating functional programming can be. 

// Let's go back to that for loop again. 
// Can we refactor this to be a bit more generalized? Right now it only works for this particular array (ingredientsArray) and this particular function (breadMaker). If we wanted to invoke this on a different array or use a different function, we'd have to write the entire loop all over again. 
// 6. Write a function called invokeOnEach that takes in an array and a function, then invokes the function on each item in the array. 

function invokeOnEach(arr, func) {
  for (i=0; i<arr.length; i++) {
    func(arr[i]);
  }

}

// Example:
var jsPoints = [2,7,3,5];
var telegraphPrepLearning = function(item) {
  console.log('after going through Telegraph Prep, this user has',item + 1000000000,'JavaScript points!');
};
// invokeOnEach(jsPoints, telegraphPrepLearning);
// 'after going through Telegraph Prep, this user has 1000000002 JavaScript points!'
// 'after going through Telegraph Prep, this user has 1000000007 JavaScript points!'
// 'after going through Telegraph Prep, this user has 1000000003 JavaScript points!'
// 'after going through Telegraph Prep, this user has 1000000005 JavaScript points!'


//invokeOnEach(jsPoints, telegraphPrepLearning)


// Let's explore another way of using callback functions: to call a function after some period of time has passed (say, after you've made an API request to get a video from YouTube, and they get back to you with the data). 
// I've created a function for you below that will invoke a callback function 5 seconds after the function is run.
var call5SecondsLater = function(callback) {
  //feel free to google for setTimeout if you want to learn more about it!
  setTimeout(callback, 5000);
};

// Just to highlight the time differences, we're console.logging something right now so you can see the 5 second delay. 
console.log('hello from yourself immediately');
// 7. Try creating various functions and passing them in as the argument for call5SecondsLater. 
  // Since we're not returning anything from call5SecondsLater, these functions will need to have side effects we can observe. Try modifying a variable, and console.logging it before and after we invoke call5SecondsLater (hint, we'll have to console.log it inside the function we pass into call5SecondsLater). 
function add(phrase) {
  console.log("hey this is what you get")
};

  call5SecondsLater(add);

// Remember that a function is just a block of code (or instructions) that we've created but not invoked yet. 
// We can create a function and then store it into a variable, as we've done with var call5SecondsLater = function() {};
// Or, we can create an anonymous function and not store it into a variable. function() {console.log('this is from the anonymous function');}
// You'll notice, of course, that we're not invoking the anonymous function. But just like a function that we've stored into a variable, we can pass this anonymous function in as an argument to a higher-order function. 
// Let's try this out! 
// 8. Create a series of anonymous functions and pass those into call5SecondsLater. Here's an example of what I'd do:
call5SecondsLater(function() {
  console.log("don't mind me, just playing around with time travel");
})

var testArr = [1,2,3,4,5];
call5SecondsLater(function() {
  testArr[0] += 10;
  console.log('testArr after adding 10 to testArr[0] on a 5 second delay:',testArr);
});

  
    var myArray = ['what', 'where', 'when', 'how', 'why'];
    call5SecondsLater(function() {
      for(var i = 0; i<myArray.length-1; i++) {
        myArray[i] = myArray[i] + ' and ';
      }
      console.log('I want to know the ' + myArray)
    })

call5SecondsLater(function() {
  for(var i = 0; i < testArr.length; i++) {
    testArr[i] += 10;
  }
  console.log('testArr after adding 10 to everything on a 5 second delay:',testArr);
});

  call5SecondsLater(function() {
    for (var i = 0; i < testArr.length; i++) {
      testArr[i] = testArr[i]+1;
    }
     console.log('why don\'t we add 1 to everything?', testArr)
  })



// This is a very common pattern for functional programming. If we're creating a function that we'll only use for that particular higher-order invocation, it can be clearer to just write it as an anonymous function inside the higher-order function invocation. This saves us from having to search elsewhere in our file to find where we defined that function and figure out what it does. It's a stylistic preference, but you should know each pattern (saving a function into a variable and passing in that variable to a higher-order function invocation, or just declaring an anonymous function in-line as we invoke the higher-order function) at least well enough to understad what's going on, since you will encounter both throughout your career as an engineer. 

// Remember back to that point that a function is just a block of code we've created but not invoked yet? Obviously, we can invoke it ourselves manually by putting () next to the function name. Or, we can let the machine invoke it for us, as we did for setTimeout. 


// Extra Credit: Let's put this together with the closures that we learned yesterday! 
// Create a function called onlyOnce that takes in a function as a callback and returns a function that only lets that callback be invoked once. 

// function onlyOnce(oneTimeFunc) {
//   //checks to see that function has not been invoked before
//   if 
//   //if yes, gives user error message
//   //if not, invokes function

// }


// This kind of thing is useful in a variety of places: charging credit cards for an order (we only want to charge the customer once per order), signing up a new user, or even something like using a gift card or using a ticket. 
// Here's an example of the behavior we're looking for:

/*
var signUpNewUserOnce = onlyOnce(signUpNewUser);
signUpNewUserOnce();  // 'Confirmed: your new account is created!'
signUpNewUserOnce();  // 'Whoops, it seems you already have an account! Did you mean to sign in?'
*/

// Extra Extra Credit: Now let's create a better version of onlyOnce that lets us pass in arguments to the callback function! 
// Example: 
/*
var multiplyOnce = onlyOnce(multiply);
multiply(3,5); // 15
multiply(4,8); // nothing should happen here. 
*/
// HINT: you'll need to use the arguments keyword and apply. Feel free to google for these if you want to explore further! 
