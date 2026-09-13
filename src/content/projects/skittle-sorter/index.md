---
title: "Skittle Sorter"
description: "My first ever project!"
startDate: "2023-05"
cover: "./skittle-cover.jpg"
tags: ["embedded"]
skills: ["arduino"]
featured: false
award: ""
gallery:
  - type: "video"
    src: "/videos/skittle.mp4"
    caption: ""
  - type: "image"
    image: "./full.jpeg"
    caption: "Skittle sorter. Skittles are loaded from the tube on top and get sent down the sled at different angles depending on color. Skittle color containers not shown, see video for details. "
  - type: "image"
    image: "./servo.jpeg"
    caption: "Revealed Servo mechanism. Cardboard door isolates the lighting condition for the sensor, achieving more consistent results required for defininig color ranges."
  - type: "image"
    image: "./LCD.jpeg"
    caption: "LCD Display. Displays each step of the sorting process as well as a total metrics after each sorted skittle. See video for details." 
---

## The Task at Hand
The final project in my high school engineering class was to create a skittle sorting machine using an Arduino, color sensor, and servos. 

## How It Works
First, skittles are loaded into a tube at the top of the machine where gravity
feeds the bottom-most one down into a rotating half-moon cardboard disc. Offset from the landing position, there is a skittle-sized cutout on the disc that served as a "bucket" of sorts. During loading, the servo would rotate the disk backwards to "fill the bucket" with the skittle. Then, it would bring the skittle to the color sensor. The resulting reading informs the bottom servo how to angle the sled. The skittle is then brought to a "drop-off hole" where it falls through the machine, down the slide, and into the corresponding compartment. <br>

An Arduino Nano (programmed in the Arduino IDE) runs the whole sequence, tracks skittle count and each step's status, and displays that info on an LCD.

## Challenges & Solutions
The biggest challenge was getting reliable color detection under changing ambient light. Testing showed that RGB readings shifted dramatically from room to room. Not to mention, the similarity of red and purple skittles required the detection boundaries to be quite small. My fix was to build a small "door" over the sensing area that blocked out most ambient light, isolating the reading conditions and making the color data far more consistent.


The ssecond challenge was jamming during loading. Sometimes, skittles wouldn't fall into the disk's cutout cleanly enough for smooth movement. I solved this by having the skittle land just outside the cutout first, then rotating the disc underneath it, which guaranteed it would drop into the cutout every time.  

## Results & Takeaways
I received 100% on the final project thanks to a clean mechanical design and extra features like live skittle-count metrics and step-by-step progress messages on the LCD display. Though, my wiring could've been a lot cleaner. 

This was my first time working with an Arduino. What I ended up loving wasn't how easily the wiring and coding clicked for me, but the process of running into problems, tracking down what was causing them, and figuring out my own way to solve them.