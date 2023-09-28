// Get all menu items
const menuItems = document.querySelectorAll('.list a');
const containerItems = document.querySelectorAll('.container');

// Add click event listeners to each menu item
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        // Remove "active" class from all menu items
            menuItems.forEach((item) => {
                
                item.classList.remove('active');
            });
            containerItems.forEach((i) => {
                document.getElementById(i.id).style='border: solid 3px #2C3333;';
                
                
            });

            // Add "active" class to the clicked menu item
            event.target.classList.add('active');
            let bid=event.target.id
            var pe = document.getElementById(bid);
            var hr = pe.getAttribute("href");
            var hid = hr.slice(1,hr.length);
            document.getElementById(hid).style='border: solid #279EFF;'
    
    });
});


// // Function to toggle between two CSS classes every 30 seconds
// function toggleDivStyles() {
//     const div = document.getElementById('changeme');

//     // Toggle between the two CSS classes
//     if (div.classList.contains('banner-blue')) {
//         div.classList.remove('banner-blue');
//         div.classList.add('banner-pink');
//     } else {
//         div.classList.remove('banner-pink');
//         div.classList.add('banner-blue');
//     }
// }

// // Call the toggleDivStyles function every 30 seconds
// setInterval(toggleDivStyles, 3000);
