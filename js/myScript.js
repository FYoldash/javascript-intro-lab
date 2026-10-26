function something(){
    
    document.getElementById("myHeading").innerHTML = "birnasa";
    document.querySelector("li").setAttribute("class", "currentPage");
    document.querySelector("nav ul li a").setAttribute("href", "https://google.com");

    const myBtn = document.getElementById("myTestBtn");
    myBtn.addEventListener("click", () => {
        console.info('hi');
    })


    // let redBtn = document.querySelector(".red");
    // redBtn.addEventListener("click", () => {
    //     document.body.setAttribute('class', 'redBack');
    // });

    //  let greenBtn = document.querySelector(".green");
    // greenBtn.addEventListener("click", () => {
    //     document.body.setAttribute('class', 'greenBack')}
    // );

    //  let blueBtn = document.querySelector(".blue");
    // blueBtn.addEventListener("click", () => {
    //     document.body.setAttribute('class', 'blueBack')}
    // );

    //    let defualtBtn = document.querySelector(".reset");
    // defualtBtn.addEventListener("click", () => {
    //     document.body.setAttribute('class', '')}
    // );

    let colButtons = document.querySelectorAll('.colPicker');
 
    colButtons.forEach(colBtn =>{
        colBtn.addEventListener("click", function(ev){
            let backCol = ev.target.innerText;
            backCol = backCol.toLowerCase();
            backCol = backCol + 'Back';

            document.body.setAttribute("class", backCol)
        });
    });
   
    
};


something();
