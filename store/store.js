console.log('week2')
// JavaScript for toggling the menu
const toggleMenu =() =>{
    // var menu = document.getElementById("menu");
    // menu.classList.toggle("show");
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const children = menuToggle.children;
    let [firstLine, secondLine, thirdLine]= children
    firstLine.classList.toggle('firstLine');
    secondLine.classList.toggle('secondLine');
    thirdLine.classList.toggle('thirdLine');
    sidebar.classList.toggle('sidebar');
    sidebar.classList.toggle('hide')
    // console.log(firstLine)
}

let songLists = [
    {id:0, title: "Zero", album:"Zero", artist: "2 AM Strums", artwork: "./assets/artwork/0.png"},
    {id:1, title: "Branches", album: "Petunia", artist: "2 AM Strums", artwork: "./assets/artwork/1.png"},
    {id:2, title: "Petunia", album: "Petunia", artist: "2 AM Strums", artwork: "./assets/artwork/2.png"},
    {id:3, title: "Rock Paper Scissor", album: "Petunia", artist: "2 AM Strums", artwork: "./assets/artwork/3.png"},
    {id:4, title: "Clyde", album: "Petunia", artist: "2 AM Strums",artwork: "./assets/artwork/4.png"},
    {id:5, title: "Many were found dead", album: "Many were found dead", artist: "2 AM Strums", artwork: "./assets/artwork/5.png"},
    {id:6, title: "Favor (Voice Notes)", album: "Favor", artist: "2 AM Strums", artwork: "./assets/artwork/6.png"},
    {id:7, title: "Achilles", album: "Achilles", artist: "2 AM Strums", artwork: "./assets/artwork/7.png"},
    {id:8, title: "Drop Who Says Otherwise",album: "Petunia", artist: "2 AM Strums", artwork: "./assets/artwork/8.png"},
    {id:9, title: "I Tried", album: "Petunia", artist: "2 AM Strums", artwork: "./assets/artwork/9.png"},
]

let shuffle = () =>{
    console.log('test');
    let charts = document.getElementById('charts').children;
    // console.log(charts);


    for(let i in charts){
        console.log("chartss", charts);
        let chart = charts[i];
        console.log(i)
        console.log("childrean", chart)
        try{
            let children = chart.children
            let figure = children[0];
            let figcaption = children[1];
            let p = children[2]

            console.log({figure, figcaption});
            setTimeout(()=>{
                figcaption.innerHTML = songLists[i].title;
                figure.children[0].setAttribute('src', songLists[i].artwork);
                p.innerHTML = songLists[i].album;
                console.log(songLists[i].title)
            }, 900);  
        } catch {
            console.log("undefined")
        }
        // let children = chart.children;
        // let figure = children[0];
        // let figcaption = children.children[1];
        // setTimeout(()=>{
        //     figcaption.innerHTML = songLists[i].title;
        //     // figure.
        // }, 900);       
        // console.log({figure, figcaption})
    }
    // for (let div of divs) {
    //     console.log(div.children[0].getAttribute('src'))
    //     let randomInt = Math.floor(Math.random()*10);
    //     let song = songLists[randomInt]
    //     div.classList.toggle('opacity-off')
    //     setTimeout(()=>{
    //         div.children[0].setAttribute('src', song.artwork);
    //         div.children[1].children[0].innerHTML = `title: ${song.title}`;
    //         div.children[1].children[1].innerHTML = `artist: ${song.artist}`;
    //         div.children[1].children[2].innerHTML = `song id: ${song.id}`;
    //         div.classList.toggle('opacity-off');
    //     }, 900);
    // }
};

// shuffle();
const formHandler=(event)=>{
    event.preventDefault()
    console.log('submit');
    console.log(event);
    const children = event.target.children;
    const payload = {};

    //basic data
    const texts = document.getElementsByClassName("form-signup-text");
    console.log(texts);
    for (let element of texts) {
        let field = element.getAttribute('id');
        let value= element.value;
        payload[field] = value
    };

    //selection data;
    const selection = document.getElementById('form-signup-region');
    const selectedIndex = selection.selectedIndex;
    const selectedValue = selection.options[selectedIndex].value;
    payload['form-signup-region'] = selectedValue;

    //options data;
    const radios = document.getElementsByClassName('form-signup-radio');
    for (let index in radios){
        if(!isNaN(+index)){
            // console.log(index, 'index radios', +index, +index !== NaN );
            let element = radios[index];
            let field = element.getAttribute('id');
            let value = element.checked;
            payload[field] = value;
        }
    };
    //textarea
    const textarea = document.getElementById('feedback').value;
    payload['feedback'] = textarea;
    console.log(payload);
    alert(`Thanks ${payload['form-signup-fullname']}!`)
    // alert(payload);
}