---
date: "2018-12-09"
title: "Chapter 2"
---

---

## User input, types and if statements

We learn about user input (interaction with our code), if statements (allowing our code to make decisions).
We next learn about bools and lists, new types which allows us to save more kinds of things. Finally we
learn about functions which make our lives easier by allowing us to reuse code we have already written.

### Lectures

1. [user input and types](https://youtu.be/jlUHbTKRTTw)
2. [if statements](https://youtu.be/th-n-6QMtr0)
3. [bool and list](https://youtu.be/PKRUQRu7D4k)
4. [functions](https://youtu.be/LAj6YWCJcOU)


### Reading material:

1. [if statement](https://pythonprogramming.net/if-statement-python-3-basics-tutorial/), [else if](https://pythonprogramming.net/else-python-3-tutorial/), [if elif else](https://pythonprogramming.net/elif-else-python-3-tutorial/).
2. [functions](https://pythonprogramming.net/functions-python-3-basics-tutorial/)



*Note that this section is not mandatory and may contain material that we have not yet covered.*

Chapters from Learn python 3 the hard way:

1. Chapter 11. Asking Questions
2. Chapter 19. Functions and Variables
3. Chapter 29. What if


### Problems

1. Make each problem of part 1 into a function, e.g. for problem 1, make a function that takes in as argument a name and an age and print user info.

2. Write a Python program to display the first and last colors from the following list:  ```color_list = ["Red","Green","White" ,"Black"]```

3. Write a Python function that accepts an integer (n) and returns the value of n+nn+nnn.

4. Write a Python program to get the difference between a given number and 17, if the number is greater than 17 return double the absolute difference.

hint: You can use math.abs() from the math module to get the absolute value of a number, e.g. 

```python
import math
k = math.abs(-2)
print(k)
# gives 2
```

5. Write a Python function to test whether a number is posive, or larger than 0. I should return True, if the number >= 0.

7. Write a function to calculate the solutions of a polinomial of degree 2 (i.e. it's biggest power is 2).

A polinomial (of degree 2) is of the following form:

$$
f(x) = ax^{2} + bx + c
$$

The solutions of this polynomial, i.e. values of $$x$$ such that
$$
f(x) = 0
$$

are 

$$
x_{1} = \frac{-b + \sqrt{b^{2} - 4 ac}}{2a}
$$

and 

$$
x_{2} = \frac{-b - \sqrt{b^{2} - 4 ac}}{2a}
$$

Notice that if $b^{2} - 4 ac = 0$, then there is only one solution.

Also, if $b^{2} - 4 ac < 0$, then there are no (real) solutions. 

Your program should look as follows:

```python

def poly_sol(a, b):
    #Write your code here

```
<br>
It should return the solutions as a list.

Therefore, depending on the values of $a$ and $b$ it should return either:

```python
[x1, x2]  # if there are 2 solutions
[x1]  # if there is 1 one solution
[] # if there is no solution
```
<br>

Note that ```[]``` is an empty list, in the same sense, if we write ```''``` this would be the empty string.


Here is an example (of the [abosulte value function](https://www.mathsisfun.com/numbers/absolute-value.html)) to get you started:


```python
def abs(x):
    if x >= 0:
        return x
    else:
        return -x
```
<br>

##What you should know by now

What does thia program do?
<br>
```python
height = input('Insert height: ')
height = int(height)

min_height = 120
if height >= min_height:
    print('Your are tall enough to ride the roller coaster')
else:
    dh = min_height - height
    print('You may not ride, you are missing so many centimeters:', dh)

if height < 0:
    print('wait a minute!!!')
    print('Your height cannot be negative')
```
<br>

If the user inputs 120 in the prompt, what will happen? 
