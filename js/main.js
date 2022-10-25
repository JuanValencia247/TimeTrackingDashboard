import data from '../data.json' assert {type: 'json'};

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let section = document.querySelector('.section-second');

const color = [
    'hsl(15, 100%, 70%)', 
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    ' hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
]

const drawElements = () =>{
    section.innerHTML = '';
    data.forEach((element, index) =>{

        let titleLowerCase = element.title.toLocaleLowerCase();
        if(titleLowerCase == 'self care'){
            titleLowerCase = 'self-care'
        }

        section.innerHTML += `
        <div class="card"> 
            <div class="card__background" style="background-color: ${color[index]};" >
                <img class="card__background-img" src="./images/icon-${titleLowerCase}.svg" alt="work">
            </div>

            <div class="card__content">
                <div class="card__details">
                    <div class="card__activity">
                        <p class="card__activity-title"> ${data[index].title}</p>
                        <img class="card__activity-img" src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
                    </div>
                </div>
        
                <div class="card__hours">
                    <p class="card__hours-hrs">${element.timeframes.daily.current}hrs</p>
                    <p class="card__hours-previous">Previous - ${element.timeframes.daily.previous}hrs</p>
                </div>
            </div>
        </div>
        `
    });
}
dailyBtn.addEventListener('click' , ()=>{
    drawElements()
});

drawElements();



weeklyBtn.addEventListener('click' , ()=>{
    section.innerHTML = '';
    data.forEach((element, index) =>{

        let titleLowerCase = element.title.toLocaleLowerCase();
        if(titleLowerCase == 'self care'){
            titleLowerCase = 'self-care'
        }

        section.innerHTML += `
        <div class="card"> 
        <div class="card__background" style="background-color: ${color[index]};" >
        <img class="card__background-img" src="./images/icon-${titleLowerCase}.svg" alt="work">
            </div>

            <div class="card__content">
                <div class="card__details">
                    <div class="card__activity">
                        <p class="card__activity-title">${data[index].title}</p>
                        <img class="card__activity-img" src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
                    </div>
                </div>
        
                <div class="card__hours">
                    <p class="card__hours-hrs">${element.timeframes.weekly.current}hrs</p>
                    <p class="card__hours-previous">Last Week - ${element.timeframes.weekly.previous}hrs</p>
                </div>
            </div>
        </div>
        `
    });
});

monthlyBtn.addEventListener('click' , ()=>{
    section.innerHTML = '';
    data.forEach((element, index) =>{

        let titleLowerCase = element.title.toLocaleLowerCase();
        if(titleLowerCase == 'self care'){
            titleLowerCase = 'self-care'
        }

        section.innerHTML += `
        <div class="card"> 
            <div class="card__background" style="background-color: ${color[index]};" >
            <img class="card__background-img" src="./images/icon-${titleLowerCase}.svg" alt="work">
            </div>

            <div class="card__content">
                <div class="card__details">
                    <div class="card__activity">
                        <p class="card__activity-title">${data[index].title}</p>
                        <img class="card__activity-img" src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
                    </div>
                </div>
        
                <div class="card__hours">
                    <p class="card__hours-hrs">${element.timeframes.monthly.current}hrs</p>
                    <p class="card__hours-previous">last month - ${element.timeframes.monthly.previous}hrs</p>
                </div>
            </div>
        </div>
        `
    });
});