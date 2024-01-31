function load_style(){
    page_style = localStorage.getItem("page_stylesheet_name");
    if(page_style === null){
        page_style = "shapes.css";
    }
    document.getElementById("css").setAttribute("href", page_style);
}

load_style();

function swapCSS(){
    if(page_style === "shapes.css"){
        localStorage.setItem("page_stylesheet_name", "simple.css");
    }
    else{
        localStorage.setItem("page_stylesheet_name", "shapes.css");
    }
    load_style();
}