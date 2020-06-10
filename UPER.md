<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>

<ul>
    <li>We are to build an eCommerce website using React</li>
    <li>It must include a product page that displays at least 10 products and their information</li>
    <li>It must include a shopping cart page</li>
    <li>It must include an option to search by product name</li>
    <li>Customers must be able to purchase more than one of each product</li>
    <li>Inventory data is to be stored in a .json or .txt file</li>
    <li>It may include bonus functionality if we so choose</li>
</ul>

<h2>
    2. Planning the Solution
</h2>

<ol>
    <li>Fill out part 1 and 2 of UPER</li>
    <li>Decide on what products to sell</li>
    <li>Decide which bonus features will be implemented</li>
    <li>Decide on a layout for the site and create wireframes</li>
    <li>Determine what components will be needed and what will be contained in those components</li>
    <li>Figure out how to integrate inventory tracking using a .json file</li>
    <li>Build the components while continuously testing functionality</li>
    <li>Test the site ensuring all task requirements have been met including bonus features</li>
    <li>Do site styling in CSS</li>
    <li>Purchase site domain</li>
    <li>Deploy the site to Digital Ocean</li>
    <li>Present the site on due date<li>
<ol>

<h2>
    3. Executing the Plan
</h2>
<ul>
    <li>Filled out part 1 and 2 of UPER</li>
    <li>Decided that my product to sell would be weird shoes, calling the site "Stay Weird"</li>
    <li>Decided to implement images and full search bonus functionality with API integration as a reach feature</li>
    <li>Researched different layout templates and decided on a layout</li>
    <li>Determined that I would need Header, Nav, Search, Product, ProductCard, Products, and Cart components</li>
    <li>Researched linking quantity tracking with .json</li>
    <li>Installed Create React App to begin project</li>
    <li>Created inventory.json file with array of objects containing my product information</li>
    <li>Attempted to use a creative method to switch between pages and could not implement due to useEffect creating an infinite rerender loop</li>
    <li>Decided to use routing for page viewing and installed react-router-dom</li>
    <li>Created routes for Products, Product, and Cart components in App.js</li>
    <li>Passed in props from App to Products, Product, and Cart components</li>
    <li>Created the structure of the Products component using props to fill content</li>
    <li>Imported and used Link HOCs to implement routing from Products view to Product view</li>
    <li>Created basic structure for Product component</li>
    <li>Tested routing between Products and Product components</li>
    <li>Ran into issue of images not displaying in ProductCard and Product, received help from another student to determine that I had to move my images into the Public folder and change my file paths in the inventory.json file and correct the img src naming</li>
    <li>Implemented and tested search functionality in Search component</li>
    <li>Built out Product structure and content</li>
    <li>Added quantity selector to Product component</li>
    <li>Wrote updateCart method in App component and passed as a prop to Product</li>
    <li>Added addToCart functionality in Product using quantity selector and updateCart method from App component</li>
    <li>Added functionality for cartCount to display number of items in cart</li>
    <li>Implemented Link functionality in Nav component to allow navigation between Products view and Cart view</li>
    <li>Built structure and content for Cart view</li>
    <li>Added checkout functionality in Cart view</li>
    <li>Added removeFromCart functionality to products in Cart view</li>
    <li>Added clearCart function in App.js and passed as a prop to Cart component</li>
    <li>Tested removeFromCart functionality</li>
    <li>Ran into issue of pressing the delete button crashing the site, finally determined I was using setCart instead of updateCart in Cart render method in App.js</li>
    <li>Added toLowerCase to Products filter because it is unlikely the user is going to capitalize their search terms</li>
    <li>Added updateSearch function in App.js and passed as a prop to Search component</li>
    <li>Added skeleton CSS for site layout</li>
    <li>Ran into issue of logo image not displaying from Public folder, moved the file to the Header component folder but still the image would not display. Finally determined that I had not imported the file for use</li>
    <li>Adjusted Product component to reflect current quantity in stock</li>
    <li>Updated addToCart process to update inventory when items are added to cart</li>
    <li>Added landing page for site</li>
    <li>Updated routing to reflect Landing page</li>
    <li>Fixed Cart view and Nav to return to Products view</li>
    <li>Added custom font to all pages</li>
    <li></li>
    <li></li>
    <li></li>
    <li>Finished styling for all pages</li>
    <li>Tested all functionality for site</li>
    <li>Prepared for presentation of site</li>
    <li>Filled out part 3 of UPER as I worked</li>
</ul>
<h2>
    4. Reflection / Refactor
</h2>
<ul>
    <li>Building would have had been easier if I had decided to use landing page in planning phase</li>
    <li></li>
    <li></li>
    <li></li>
</ul>