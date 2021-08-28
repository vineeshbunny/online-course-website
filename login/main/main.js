let num=Math.floor(Math.random() * 100);

const quotesy= document.querySelector(".quote")
const author= document.querySelector(".author")
const left= document.querySelector(".left")
const right= document.querySelector(".right")



left.addEventListener("click",()=>{
    left.style.opacity=0
    right.style.opacity=1
})

right.addEventListener("click",()=>{
    right.style.opacity=0
    left.style.opacity=1
})


async function jokes(){
    const jokes = await fetch('https://type.fit/api/quotes');
    const final= await jokes.json()
    
    quotesy.innerText= final[num].text;
    author.innerText=final[num].author;
    num+=1

    
    

}

jokes();