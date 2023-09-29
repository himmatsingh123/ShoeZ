let circle = document.querySelector(".color-option");

circle.addEventListener("click", (e) => {
    let target = e.target;
    
    if (target.classList.contains("circle")) {
        // Remove "active" class from the previously active circle
        circle.querySelector(".active").classList.remove("active");
        
        // Add "active" class to the clicked circle
        target.classList.add("active");
        
        // Remove "active" class from the previously active image
        document.querySelector(".shoes_img .active").classList.remove("active");
        
        // Add "active" class to the corresponding image
        document.querySelector(`.shoes_img #${target.id}`).classList.add("active");
    }
});
