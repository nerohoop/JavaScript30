How does CSS affect HTML?
Web browsers apply CSS rules to a document to affect how they are displayed. A CSS rule is formed from:
1.A set of properties, which have values set to update how the HTML content is displayed
2.A selector, which selects the element(s) you want to apply the updated property values to.

How does CSS actually work?EDIT
1.The browser converts HTML and CSS into the DOM (Document Object Model). The DOM represents the document in the computer's memory. It combines the document's content with its style.
2.The browser displays the contents of the DOM.

DOM representation
HTML code:
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>

DOM:
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
   └─ "Sheets"
