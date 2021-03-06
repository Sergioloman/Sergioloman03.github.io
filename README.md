# Password Generator.

This app allows you to create a password just by inputing some information. 


Follow the prompts in your browser to generate a random password with your specifications!

Enjoy!

##Tech
###Variables

All of our variables are listed at the top of the document. Each type of character posible in our randomizer is stored in between code lines 1-4

The *lenght* variable is left empty since it will be defined later

###Functions

**passwordLenght**

This function defines the *lenght* variable above. We collect the information from the user via a browser prompt and convert it to a numeric value so we can use a conditional statement to limit the number of characters.

**passwordOptions**

passwordOptions enables the user to select the possible array permutations by using the window.confirm function. we have included an *if* loop to ensure that at least 1 prompt is being selected.

**randomChar**
Here we create a function that takes an array as a parameter. using the function below, we will be creating an large concatinated array with all the options selected. Once we do, we will be able to select rancom characters from our main array using this function.

**generatePassword**

The generatePassword option uses our passwordLenght and passwordOptions along with the concat function to create a large array with all the possible options. We create an additional 2 arrays called *result* and *posiblechars* to store the resultsd using the *push* method.

**writePassword**

finally, our final function picks up the result from *generatePassword* and inputs it into our HTML using the *querySelector* method.

____________________________________

I Hope you find the application handy and please let me know if you have any questions or feedback!
____________________________________

![alt text](./develop/Images/screenshot1.PNG)