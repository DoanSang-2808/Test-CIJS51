const quiz = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
fetch(quiz)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results)
        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i])

            rawHTML = `<center>
            <div class="container">
            <div class="ques">
                <p> Câu${i+1} </p>
                <p style ="font-weight : 500">${data.results[i].question}</p>
            </div>
            <div class="answers" style="display: block;" >
                <span id="margin-right" >1. ${data.results[i].correct_answer}</span>
                <span id="margin-right" >2. ${data.results[i].incorrect_answers[0]}</span>
                <span id="margin-right" >3. ${data.results[i].incorrect_answers[1]}</span>
               <span id="margin-right" >4. ${data.results[i].incorrect_answers[2]}</span>
    
            </div>
            <div class="your_ans" style = " margin-top: 30px">
            <input type = 'text' placeholder= "Input your Answer" class="ans${i}">
            </div>
        </div> </center>`
            document.querySelector('.container').insertAdjacentHTML('beforeend', rawHTML)
        }
        let countPoint = 0
        const your_ans = document.querySelector('.submit')
        your_ans.addEventListener('click', () =>{
            for(let i = 0; i <data.results.length; i++ ){
                let answer = document.querySelector(".ans"+i).value
                console.log(answer)
                console.log(data.results[i].correct_answer)
               if(answer == data.results[i].correct_answer){
                    countPoint += 1
               }
                   

            }
            alert('Number correct ' + countPoint )
            const reload = document.querySelector('.reload')
            reload.addEventListener('click', ()=>{
                location.reload()
            })
        })
    })