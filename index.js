// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button

// Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. 
// Write JavaScript code that works with the existing HTML and CSS to implement the required features.
// Hint: you may find it helpful to read up on and use the following jQuery methods: 
// .submit(), preventDefault(), toggleClass(), and closest().
// When you're done, push your work up to GitHub and publish it on GitHub Pages. 

// SUCCESSFULLY ADDS NEW ITEMS
// ISSUES:
$("form button").on("click", function(event) {
    event.preventDefault();
    let newListBlock = $("li:last-of-type").clone();
    newListBlock.appendTo(".shopping-list");
    let newItem = $("form input:text").val();
    $(".shopping-item").last().text(newItem);
    $(this).attr("placeholder", "broccoli");
});

// SUCCESSFULLY DELETES ITEMS
$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    $(this).closest("li").remove();
});

// ISSUE:
// the ".shopping-item" class won't select the item
$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
$(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});
// 