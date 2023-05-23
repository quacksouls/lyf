# Exercises

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
The
[viewport](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts)
is that part of a web browser that is currently displaying your HTML document.

1. The pixel coordinates $$(0, 0)$$ specify the top-left corner of the viewport.
   Position the dialog box using the latter coordinates.
1. The dimensions of the viewport are specified by the properties
   [`window.innerWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)
   and
   [`window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight).
   Start from 0 and increase the coordinates at which to position the dialog
   box.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
The dimensions of the dialog box, and indeed any element in an HTML document,
can be accessed via the properties
[`offsetWidth`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth)
and
[`offsetHeight`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight).
Determine the centre of the viewport and then shift the dialog box accordingly
so that it is positioned at the centre.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
As shown in the image from the section [_Dialog box_](box.md), the dialog box
has no clear border. The body of the box seems like it is part of the background
rather than being one component of the box. Use the property
[`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border) to set a
visible border around the dialog box.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
When you hover your mouse cursor over the `X` button, you want the cursor to
change to a style indicating that you can click on the button. Modify the block

```js
.box .close{
}
```

by choosing a style for the property
[`cursor`](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Carefully observe the image of the dialog box from the section
[_Dialog box_](box.md). Note that the text almost touches the left, right, top,
and bottom edges of the box. You want some spacing between the text and the four
edges of the box to contrast the text from the box itself. Use the
[`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) property
to set a suitable padding area for all 4 sides of the box.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
You want a way to use your mouse to move the dialog box around the viewport. Two
pieces of information are required. First, you need the current coordinates of
the box. Second, you need a way to query the coordinates of the mouse. The
current horizontal and vertical coordinates of the box are specified by the
properties
[`offsetLeft`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft)
and
[`offsetTop`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop),
respectively. Similarly, the horizontal and vertical coordinates of the mouse
are specified by the properties
[`clientX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX)
and
[`clientY`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY),
respectively. The values of the latter properties will update as you move your
mouse.

Next, you need a way to register
[mouse events](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent).
Place your mouse cursor over the head component of the dialog box. Press down on
the left mouse button and drag the box. In order for the box to actually move
along with your mouse, you must use the method

```js
box.querySelector(".head").addEventListener(type, listener);
```

to register the
[`mousedown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event)
event. Here, `type` should be a string that specifies the type of event of
interest. You want to know when a mouse button is pressed. The type of event
your script is listening for is
[`"mousedown"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event).
The parameter `listener` can be a function that is invoked as soon as a mouse
button is pressed. The listener function takes an event `e`, i.e. an object, as
a parameter. You want this function to handle the dragging of the dialog box.
The object `e` will have access to the mouse coordinates `clientX` and
`clientY`. The function to handle the mouse down event would have the following
structure:

[import](code/mouse-event.js)

Here's how to calculate the new coordinates of the box. Let $$b_x$$ and $$b_y$$
be the current horizontal and vertical coordinates, respectively, of the box.
Let $$m_x$$ and $$m_y$$ be the current horizontal and vertical coordinates,
respectively, of the mouse. Let $$n_x$$ and $$n_y$$ be the new horizontal and
vertical coordinates, respectively, of the mouse. The new horizontal $$x$$ and
vertical $$y$$ coordinates of the box are

$$
\begin{align}
x &= b_x + n_x - m_x \\
y &= b_y + n_y - m_y
\end{align}
$$

Within the mouse down listener function, declare a function `mousemoveFunc(e)`
that takes an event object `e` and displays the dialog box at the new
coordinates. Then use the code

```js
doc.addEventListener("mousemove", mousemoveFunc);
```

to register your function `mousemoveFunc(e)` with the HTML document. Your
function `mousemoveFunc(e)` would be invoked whenever a mouse button is pressed.
You must hold the pressed button and drag the dialog box to its new location.

Also declare, within the mouse down listener function, a function
`mouseupFunc()` that takes zero parameters and removes the event listeners for
the
[`"mousemove"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)
and
[`"mouseup"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event)
events. Use the method
[`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
of the HTML document. You need to add the event listener for the `"mouseup"`
event to the document, underneath where you add the event listener for the
`"mousemove"` event.

<!-- prettier-ignore -->
{% exercise %}{% endexercise %}
Sam is making a lunch meal plan for the next 5 days. The tentative plan is as
shown in the following table.

| Day       | Food          | Drink      |
| :-------- | :------------ | :--------- |
| Monday    | sushi         | water      |
| Tuesday   | sandwich      | juice      |
| Wednesday | noodles       | tea        |
| Thursday  | chicken salad | smoothie   |
| Friday    | fish & chips  | soft drink |

The HTML element pair
[`<table></table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
allows you to create a table. The header of a table is defined by the element
pair
[`<thead></thead>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead).
Similarly, the body of a table is defined by the element pair
[`<tbody></tbody>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody).
A row is defined by the element pair
[`<tr></tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr).
Each cell in a row is defined by the element pair
[`<td></td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td).
Refer to
[this page](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)
for an introduction to HTML tables. Convert Sam's meal plan to an HTML table and
display the table using the dialog box. The result should be something like the
following image.

![Sam's lunch plan](../../image/gui/lunch.png "Sam's lunch plan")

When you hover your mouse cursor over a row of the table body, you want to
highlight the entire row to allow for easy reading. The CSS selector
[`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) can be used
to highlight an HTML element when you hover your mouse cursor over the element.
Use the CSS structure

```js
tr:hover {
    // Insert style
}
```

to highlight a table row. Use a suitable
[background colour](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)
for highlighting. Refer to
[this page](https://www.thoughtco.com/contrasting-foreground-background-colors-4061363)
to help you choose a colour that contrasts well with the text colour.
