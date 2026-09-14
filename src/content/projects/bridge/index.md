---
title: "CIV102 Bridge Project"
description: "Matboard Bridge"
cover: "./cover.jpg"
startDate: "2024-11"
tags: ["engineering design"]
skills: ["matlab", "design"]
featured: false
gallery:
  - type: "video"
    src: "/videos/bridge.mp4"
    caption: "Our bridge at testing. Came apart at the splint, likely due to not having enough glue or time for the glue to stick."
  - type: "pdf"
    src: "/docs/calcs.pdf"
    caption: "Calculations. I created all the MATLAB calculations and graphs for shear force, bending moment, factor of safety, etc. as well as the drawings for each specific cross-sectional area case for our final design. "
  - type: "pdf"
    src: "/docs/handout.pdf"
    caption: "Project description handout."
githubUrl: "https://github.com/liuandy1207/CIV102-Bridge-Project"
---

## The Task at Hand
As a team of 4, create a bridge using matboard (hard paper) and contact cement that can withstand a moving load of at least 400 N and is at least 1250 mm long. 

## What We Did
Following a default design 0, make optimizations to dimension and geometry through calculations and graphs in MATLAB with respect to material learned in class. We iterated over our design, each time focusing on optimizing another form of strength. 

## My Role
I independently handled the MATLAB calculations that justified key design decisions such as doubling the top layer's thickness. Specifically, I determined the shear force capacities and the bending moment capacities for different design cases. I also contributed to coming up with the idea to alter the dimensions of different parts and the differences in glueing different parts. 

## Challenges
The major challenge was that real materials didn't behave as ideally as our models assumed. Glue application had an outsized effect on our design's overall strength. Since our material pieces weren't available in lengths long enough to span the required distance, we had to splice them together, and the layers tended to separate at those splice points. This is something that we could not account for using the knowledge in class. 

## Results & Takeaways
Although our bridge failed to withstand the 400 N, I learned a great deal from the experience about how much theory and application can diverge in practice. Real-world conditions rarely behave as cleanly as we expected, and that gap between what we predicted and what actually happened wasn't something we'd fully accounted for going in. Working around constraints like materials only being available in fixed lengths made this especially clear. Looking back, I think we should've spent more time researching alternative designs upfront instead of just optimizing our initial one.
