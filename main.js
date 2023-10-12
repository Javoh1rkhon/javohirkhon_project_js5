// let a = prompt("100 katta son yoz!!!")

// if (a.trim() >= 100) {
//     console.log(alert("good"));
// } else {
//     console.log(prompt("Yoz deyapman chort!!!"));
// }

// N2

let txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias tenetur tempora a neque dolore undeiure quo eos sed animi magnam veritatis, id repellendus asperiores repudiandae error eius non. Lorem ipsumdolor, sit amet consectetur adipisicing elit. Nisi nostrum, nam non iure molestias ipsa placeat harum maiorescupiditate maxime eveniet optio amet aliquam, voluptatum deserunt rem sed tenetur est! Lorem ipsum dolor sitamet consectetur adipisicing elit. Quami cum vero libero asperiores, possimus nemo quos excepturi? Nihilenim exercitationem, dolor unde ex voluptatibus delenit molestias cumque. Pariatur, voluptatem deserunt!"

let a = txt.split('')
let o = ""

for(let i = 0; i < a.length; i++) {
    if(a[i].charAt() === "A") {
        a.push(o[i])
    }
}

console.log(a);
console.log(o);