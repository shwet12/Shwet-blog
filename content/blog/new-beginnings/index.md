---
title: The MVC design pattern
date: "2021-05-11"
description: This blog talks about the concept behind the famous mvc pattern using a simple todo app.
---

## What is Model View Controller?

MVC is one possible pattern for organizing your code. It's a popular one.

  * Model - Manages the data of an application
  * View - A visual representation of the model
  * Controller - Links the user and the system

The model is the data.

The view is how the data is displayed. This is the place where we write the view of the app.

The controller connects the model and the view. This place is where all the event listners goes.

The model never touches the view. The view never touches the model. The controller connects them.

## Our basic structure of the js would look something like this

```javascript
class Model {
  constructor() {}
}

class View {
  constructor() {}
}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }
}

const app = new Controller(new Model(), new View())
```
<p>&nbsp;</p>
As you can see from the above snippet the controller will have the instances of both model and view cause its forms the connection between them in the app.

## View

___

We're going to create the view by manipulating the DOM - the document object model.

Neither the controller nor the model should know anything about the DOM, HTML elements, CSS, or any of that. Anything relating to it should be in the view.

```Javascript
class View {
    constructor() {
        // here we create all the elements needed our html and select the root div where our todo app would reside.

        // Append the title, form, and todo list to the app
        this.root.append(this.form, this.todoContainer)
    }
    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    displayTodos(todos) {
        // this function is kind of the render function for our app which would isplay the todos.
    }
    bindAddTodo(handler) {
      // bind add todo
    }

    bindDeleteOrToggleTodo(deleteHandler, toggleHandler) {
      // bind delete or toggle changes
    }
    bindFilterChange(handler) {
     // bind filter changes
    }
}
```
## Model

___

This will be the place where our data would reside and all manipulations to it would be done here

```Javascript

class Model {
    constructor() {
        this.todos = [];
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    addTodo(todoText) {
       // add a todo to the todos data
    }

    deleteTodo(id) {
       // delete a todo from the todos data
    }

    toggleTodo(id) {
        // Flip the complete boolean on the specified todo
    }
    filterTodo(value) {
        // Filter the todos on the type of selection
    }

}
```