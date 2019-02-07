---
date: "2018-12-02"
title: "Chapter 1"
---


---

## Variables, printing and comments

We start by introducing  comments, printing and variables.

### Lectures

1. [Variables, printing and comments.](https://youtu.be/EqtSN_EffD4)
2. [Sequential programming.](https://youtu.be/UHv3OvkRW6I)

### Reading material:
1. [Basics](https://pythonprogramming.net/introduction-to-python-programming/)
2. [Printing and strings](https://pythonprogramming.net/python-tutorial-print-function-strings/)
3. [variables](https://pythonprogramming.net/python-3-variables-tutorial/)

### Problems

*Due date Sunday the 9th of December, send me an email with the solutions. (add python code as an attachement, e.g. problem.py)*

I have written templates that you can use for each homework. You can find them [here](https://github.com/Nacho114/python_course/tree/master/homework/hw1).





I have added the [solution](https://github.com/Nacho114/python_course/blob/master/homework/hw1/hw_example.py) to problem 0,
this is for you to see more or less what you should do for the rest.

0. Write a [program](https://github.com/Nacho114/python_course/blob/master/homework/hw1/hw_example.py) to compute the average of 3 numbers. [Part0]

1. Write a Python [program](https://github.com/Nacho114/python_course/blob/master/homework/hw1/part1.py) to display your details like name, age, address in three different lines. 

2. Write a Python [program](https://github.com/Nacho114/python_course/blob/master/homework/hw1/part2.py) to solve 

$$
(x + y) \times (x + y)
$$

Test Data : $x = 4$, $y = 3$

Expected Output : $(4 + 3)^{2} = 49$


3. Write a Python [program](https://github.com/Nacho114/python_course/blob/master/homework/hw1/part3.py) to compute the between the points $(x_{1}, y_{1})$ and $(x_{2}, y_{2})$

The [distance](https://www.mathsisfun.com/algebra/distance-2-points.html) between 2 points is:
$$
    distance = \sqrt{(x_{1} - x_{2})^{2} + (y_{1} - y_{2})^{2}}
$$

We have not seen how to use more advanced math functions in python, such as
the square root, or the sine. Bellow is some python code that you can test out to see how to use the math package in python. 

```python
    import math # we need to first import the package

    output = math.sqrt(4) # we call the squarte root function from the math package
    print(output) # this will print out 4
```
<br>

We will learn next lesson how to use python packages but the syntax is quite simple. We need to first import the package, and then to use a function from the package, we first write the name of the package, followed by a dot, and then name of the function that we wish to use. You can see [here](https://docs.python.org/3/library/math.html) the full documentation of python math functions.

This might seem like a lot to digest at first, but don't worry, that is normal!  Right now it's not important that you understand how all of this works. We will break down all the essential pieces in the weeks to come.

### [Solutions](https://github.com/Nacho114/python_course/tree/master/homework/hw1_sol)

<br>

### What you should know by now

Here is an example with everything we have seen,
you should be able to know what the output is

```python
    age = 17
    name = 'pepe'
    print(name, ' tiene ', age, ' anios')
```

