---
title: PubSub pattern using Javascript
date: 2021-04-25
description: "This post talks about the famous publish subscribe pattern and its usage in Frontend engineering."
---

## What is PubSub anyway

The Publisher/Subscriber pattern is basically used to create seperate modules in our codebase which can then communicate among themselves without depending directly on each other. So using a event manager module we can help our components communicte among themselves without knowing about each other.

## PubSub in frontend ecosystem.

If you are a frontend develper you must have used the pubsub patter at some point of time. If we had ever added an event listener on an element you are actually the pubsub pattern.

Something like this

```Javascript
element.addEventListener('click', () => {
    console.log('I got clicked');
})
```
In this the element is the subscriber and the event is the click event.So once click happens we execute the callback function.

Similarly we can create our own custom events and have a callback function attached for that event.


## How do we implement our own PubSub

Firstly We would need event manager as this would maintain the actual state of our subscribers and their corrosponding events attached.


```Javascript
export const pubsub = {
    events: {},
    subscribe: function (evName, fn) {
        console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
        //add an event with a name as new or to existing list
        this.events[evName] = this.events[evName] || [];
        this.events[evName].push(fn);
        console.log(this.events);
    },
    unsubscribe: function (evName, fn) {
        console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
        //remove an event function by name
        if (this.events[evName]) {
            this.events[evName] = this.events[evName].filter(f => f !== fn);
        }
    },
    publish: function (evName, data) {
        console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);
        //emit|publish|announce the event to anyone who is subscribed
        if (this.events[evName]) {
            this.events[evName].forEach(f => {
                f(data);
            });
        }
    }
};
```

This would be our event manager which will have an events object which will have the list of events. Now for each events we will maintain list of callback functions from our different subscribers.

* Subscribe function would add the supplied callback to the corrosponding event.

* Unsubscribe function would remove the callback for the array of callback for that event.

* Publish would execute all the callbacks for the passed event.

## Implementation

Suppose we have a form which takes some inputs and displays those value in some table form. So as we see this can be a perfect usecase to implement pubsub.

* We will have a seperate component for Form and for the display container.

* The display conatiner component will subscribe to a custom form submission event and provide a callback fucntion which needs to get executed. On initial load the conatiner would subscribe for that event.

## Sample project

https://github.com/shwet12/PubSub-implementation-in-JS-project

