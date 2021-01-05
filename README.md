# Module 2 Resources

Welcome to Module 2!

## How to use this repository

To use this repo, you'll probably want to clone it in _two_ different folders.

This repo is updated often, and if you want to edit these files you'll want a copy
you can mess with and a copy where you can always pull the latest changes into it
without running into git conflicts (which you have not yet learned how to resolve yet)

First choose a folder where you want to keep your files. Then use the `cd` command
to change into that directory. We recommend you keep them in your home directory.

Example, let's assume I have a "appacademy" folder in my home directory.

```shell
cd ~/appacademy
```

Would be the command to change to that folder (remember `~` is shorthand in unix for your home directory).

Use the `git clone` command to clone this repo.

```shell
git clone <clone url from this repo>
```

This will create a folder called `Module-2-Resources`.

To clone a separate copy into another folder (say `my-Module-2-Resources` you could use this variant of the `git clone` command

```shell
git clone <clone url from this repo> my-Module-2-Resources
```

If you do an `ls` you should see you have two folders with the same content.

```shell
ls -l 
Module-2-Resources
my-Module-2-Resources
```

Both of these are completely functional git repos, and you can run a `git pull` command in either folder anytime to grab the latest content, but be aware that
if you have edited any files in the folder, and do a `git pull`, git will attempt to pull and merge the changes with your changes, and may refuse to do so or you may end up with a git conflict.

Because of this we recommend you only edit the files in `my-Module-2-Resouces` folder, and just do your git pulls in the original `Module-2-Resources` folder (If you do know how to resolve git conflicts, feel free to use a single folder.)

Below you will find an outline of the material we will be covering over the next 3 weeks. The days have been broken into subdirectories, each containing additional resources for a given day (notes, practices and the content we will cover during lecture).

## Week 4 - Working With The Browser

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 1: Browser Basics](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-4/d1-browser-basics)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 2: Element Selection](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-4/d2-element-selection)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 3: Event Handling](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-4/d3-event-handling)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 4: Json and Storage](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-4/d4-json-and-storage)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Review Guide](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-4/review-guide)

## Week 5 - Object Oriented Programming

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 1: Context and OOP](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-5/d1-context-and-oop)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 2: ES6 Classes](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-5/d2-classes)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 3: More OOP](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-5/d3-more-oop)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 4: ES6 Modules](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-5/d4-es6-modules)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Review Guide](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-5/review-guide)

## Week 6 - Promises and Unit Testing

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 1: HTTP](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-6/d1-http)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 2: Promises](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-6/d2-promises)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 3: Async and Await](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-6/d3-async-await)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Day 4: Unit Testing](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-6/d4-unit-testing)
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Review Guide](https://github.com/alissacrane123/Module-2-Resources/tree/main/week-6/review-guide)

