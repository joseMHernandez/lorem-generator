const text = ["The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever \n", 
"She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work? \n", 
"Sometimes it's simply better to ignore the haters. That's the lesson that Tom's dad had been trying to teach him, but Tom still couldn't let it go. He latched onto them and their hate and couldn't let it go, but he also realized that this wasn't healthy. That's when he came up with his devious plan \n",
"Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.",
]


const form = document.querySelector('.lorem-form')
const amount = document.querySelector('#amount')
const result = document.querySelector('.lorem-text')

form.addEventListener('submit', (e)=>{

    e.preventDefault()
    const random = Math.floor(Math.random() * text.length)

    const value = parseInt(amount.value)
if(isNaN(value) || value < 0 || value > 9){
    result.innerHTML = `<p class="result"> ${text[random]} </p> `
}else{
    let tempTxt = text.slice(0, value)
   tempTxt = tempTxt.map((item)=>{
       return `<p class="result"> ${item} </p> `

   }).join('')

   result.innerHTML = tempTxt
}
})