let num=Math.floor(Math.random() * 100);

const quotesy= document.querySelector(".quote")
const author= document.querySelector(".author")



async function jokes(){
    const jokes = await fetch('https://type.fit/api/quotes');
    const final= await jokes.json()
    
    quotesy.innerText= final[num].text;
    author.innerText=final[num].author;
    num+=1

    
    

}

jokes();