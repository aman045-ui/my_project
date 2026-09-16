let questions = [
{q:"Who was the first President of India?", o:["Jawaharlal Nehru","Dr. Rajendra Prasad","Mahatma Gandhi","Sardar Patel"], a:1},
{q:"In which year did India gain independence?", o:["1945","1946","1947","1950"], a:2},
{q:"Who discovered America?", o:["Christopher Columbus","James Cook","Magellan","Vasco da Gama"], a:0},
{q:"Who built the Taj Mahal?", o:["Akbar","Babur","Shah Jahan","Aurangzeb"], a:2},
{q:"When did World War II end?", o:["1942","1945","1939","1950"], a:1},
{q:"Who is known as Father of the Nation?", o:["Nehru","Gandhi","Patel","Bose"], a:1},
{q:"Indus Valley Civilization was located in?", o:["China","India/Pakistan","Egypt","Greece"], a:1},
{q:"Who was the first Mughal emperor?", o:["Akbar","Babur","Humayun","Shah Jahan"], a:1},
{q:"The Great Wall is in which country?", o:["India","China","Japan","Korea"], a:1},
{q:"Who wrote Indian National Anthem?", o:["Rabindranath Tagore","Gandhi","Nehru","Bankim Chandra"], a:0},
{q:"French Revolution started in?", o:["1776","1789","1800","1815"], a:1},
{q:"First man on moon?", o:["Neil Armstrong","Yuri Gagarin","Buzz Aldrin","John Glenn"], a:0},
{q:"Capital of Maurya Empire?", o:["Delhi","Pataliputra","Agra","Ujjain"], a:1},
{q:"Who invented telephone?", o:["Edison","Alexander Graham Bell","Tesla","Newton"], a:1},
{q:"Quit India Movement year?", o:["1940","1942","1935","1947"], a:1},
{q:"First Prime Minister of India?", o:["Jawaharlal Nehru","Gandhi","Patel","Rajendra Prasad"], a:0},
{q:"Battle of Plassey year?", o:["1757","1857","1707","1800"], a:0},
{q:"Founder of Buddhism?", o:["Mahavira","Gautam Buddha","Ashoka","Gandhi"], a:1},
{q:"Cold War was between?", o:["USA & USSR","India & China","UK & France","Germany & Italy"], a:0},
{q:"First Governor-General of India?", o:["Mountbatten","C. Rajagopalachari","Nehru","Patel"], a:1}
];

let current = 0;
let score = 0;
let selected = null;

$("#startBtn").click(function(){
    $("#startBtn").hide();
    $("#quiz").removeClass("d-none");
    loadQuestion();
});

function loadQuestion(){
    selected = null;
    $("#nextBtn").addClass("d-none");

    let q = questions[current];

    $("#progress").text(`Question ${current+1} of ${questions.length}`);
    $("#question").text(q.q);

    let percent = ((current)/questions.length)*100;
    $("#progressBar").css("width", percent + "%");

    $("#options").html("");

    q.o.forEach((opt, i)=>{
        $("#options").append(`
            <div class="list-group-item" onclick="selectOption(this, ${i})">
                ${opt}
            </div>
        `);
    });
}

function selectOption(element, index){
    if(selected !== null) return;

    selected = index;

    let correct = questions[current].a;

    $(".list-group-item").each(function(i){
        if(i === correct) $(this).addClass("correct");
        else if(i === selected) $(this).addClass("wrong");
    });

    if(selected === correct) score++;

    $("#score").text(score);
    $("#nextBtn").removeClass("d-none");
}

$("#nextBtn").click(function(){
    current++;
    if(current >= questions.length){
        $("#quiz").addClass("d-none");
        $("#result").removeClass("d-none");
        $("#finalScore").text(score);
    } else {
        loadQuestion();
    }
});
