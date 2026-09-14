---
title: "Wannabe Wall-E"
description: "Autonomous Robot Challenge"
cover: "./cover.jpg"
startDate: "2025-02-02"
tags: ["embedded"]
skills: ["arduino"]
featured: true
award: "1st Place"
gallery:
  - type: "video"
    src: "/videos/circle.mp4"
    caption: "Challenge 1: Drop the tower at the center of the circle from a random location. Our approach depended on finding center first before aligning ourselves to drop the tower at the center."
  - type: "image"
    image: "./cover.jpg"
    caption: "More images coming soon..."
githubUrl: "https://github.com/liuandy1207/UTRAHacks2025"
devpostUrl: "https://devpost.com/software/wannabe-wall-e"
---

## The Task at Hand
UTRAHacks2025's closed challenge involved building an autonomous robot that would navigate a series of challenges: 1. find the center of a colored circle and drop an object, 2. navigate a maze based on the color of the tiles below the robot, 3. I think there was a third challenge, but I forgot what it was (we skipped that one) within a small time period. 

## How It Works
For the first challenge, we developed a color pattern algorithm to find the center of the circle.

For the second challenge, we basically followed instructions. If the floor tile was a certain color, do a certain action, until you reach the black square. However, in practice, we noticed that it got stuck quite often due to friction, battery drain, and a plethora of other reasons. Thus, I implemented a fail-safe for when it scans the same color more than 3 times, it should just back up as much as it can to try and get out of the rutt. 

## My Role
I worked on the wiring, construction of the main body, and planning of the algorithms. 

My biggest contributions are the corrective turning strategy that compensated for a faulty motor driver, allowing for tight turns on the spot and the hail-mary strategy that got us the victory in challenge two. See below for details. 

## Challenges & Solutions
The main challenge was that we had a faulty motor driver incapable of moving both wheels at the same time, making it signficantly more difficult to turn. I had this idea to rapidly jitter both wheels in opposite directions when we wanted to turn and this allowed for much tighter turns than just moving one wheel, making it possible for us to turn reliably.

The second challenge for a hackathon like this is that the distance a robot can go per unit time decreases over time with respect to the amount of voltage in the battery. This difference can mess up movement algorithm significantly. Thus, I came up with the idea to add a parameter to all our distance/rotation functions that adjusted values to be consistent with respect to battery power. If it turned too little, you would up the factor, if it turned too much, you would down the factor. 

The final challenge was that our robot would always get stuck on the maze. I suspect it had difficulty gaining consistent traction on the slick cardstock, resulting in variable distance travelled all the time. This made it basically impossible to navigate the maze by rules. Furthermore, the robots wide chassis made it prone to getting clipped on the thin walls unable to escape by following the rules. Thus, I implemeneted a fail-safe to get wannable wall-e out of these situations and regain hope. And by some stroke of luck, wannabe wall-e was able to navigate his way to the end point by traversing the entire maze. 

## Results & Takeaways
Our team focused on the challenges one at a time, opting for doing good at one challenge over doing poorly at many. As a result, we were able to successfully complete 2 whole challenges out of 3 whereas every other team struggled to manage all three and would only be able to complete one at most, thus resulting in our win. My main takeaway from this event is that you can get more done by taking things one at a time instead of trying to do too much at once. 