### Structure:

According to the design I understand that it’s a single page portfolio type website. So, even though there is multiple components and link options but those will basically scroll down the viewer to specific sections.

### Sections:

**Hero** → In hero section for the background gradient. I used png image from figma design. For the Heading text I made a custom component named CustomText which takes the content, word which will have special background, a break-point and position. However, I haven’t used that everywhere. For, Button I have created 2 custom component one NavigationButton & Button but with the Button many of buttons work is not clear so I haven't used them in all places.

**Skills** → In this section based on button click whether it is right or left button is clicked skills card will keep moving in and out of the view basically a slider. Once every item of a side is viewed it will reset from the beginning.

**About** → Mentionable work here is the Brick Falling for that I made it generate random brick every 0.5ms but it will always keep 10 brick and the falling is completely randomized. In the granted width bricks will be falling in random order.

**WorkProcess** → Nothing special here. In case of animation I used rotated it based on hover alongwith changed the color.

**Contact** → Same, nothing special here.

**Footer** → Simple, mostly flex box.

### Component:

Button, CustomText, FallingBricks, NavigationButton.
