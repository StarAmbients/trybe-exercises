//  Use the `setAttribute` method to change the value of the identity attribute (id) from navBar to bankingTopNavigation.

var parent = document.getElementById("navBar");
parent.setAttribute("id", "bankingTopNavigation");

// Create a new element of type `li`. Create a new text node with the contents “ACH/Wire Transfer.” Append the text node to the newly created list node. Finally, append this updated list node to the unordered list using the `appendChild` method.

var li = document.createElement("li");
var text = document.createTextNode("ACH/Wire Transfer");
li.appendChild(text);
parent.firstElementChild.appendChild(li);

// Use the `firstChild` and the `lastChild` properties to get hold of the first and last `li` elements under the parent `ul` node. Display the contents between the anchor tags for both the children (Hint: nodeValue property).

var ul = document.getElementById("bankingTopNavigation").firstElementChild;
var first = ul.firstElementChild;
var last = ul.lastElementChild;

document.write(first.firstChild.firstChild.nodeValue + "<br>");
document.write(last.firstChild.nodeValue);
