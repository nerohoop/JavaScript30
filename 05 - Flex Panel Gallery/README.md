#Exercise 5: Flex Panel Gallery
Finish date: Feb 1, 2017

##Problem
We are given a web page with five 'div' HTML element to start with. After observing the finished web page. I realize our main target in this challenge is to align the panels horizontally, expand the panel with animation when user click on it.

##Learning notes

Most of this challenge focuses on CSS flex box. After reading a few articles explaining how it works, here are a few things I've learned:

- When elements are laid out as flexible box, they are laid out along two axes: main axis and cross axis.
- The main axis is the axis running in the direction the flex items are being laid out in.
- The parent element that has display : flex set on it is called the flex container.
- Flexbox provides flex-direction that specifies what direction the main axis runs in.

Flexbox is a quite an useful tool, it make the layout issue in web pages a breeze. So let's get started.

  1. First we want to align our panels horizontally. Update the styling applied to 'panels' class to display as flex container.

    ```CSS
    .panels {
      /* ... */
      display: flex;
      flex-direction: row;
    }
    ```
  2. We also need to apply the styling to sub-panels so the sub-panel itself can be displayed as a flex container as well.
  We also need to use 'justify-content' and 'align-items' to specify how items are laid out along the main axis and cross axis.

    ```CSS
    .panel {
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
    }
    ```
  3. We realize that the flex items are not taking the whole width of the window, this is because we haven't told the flex container how much space each item will take.

    ```CSS
    .panel {
      flex: 1;
    }
    ```

  4.
