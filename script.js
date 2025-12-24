const forcesID = 'https://codeforces.com/api/user.info?handles=vduttrat'
const submissions = 'https://codeforces.com/api/user.status?handle=vduttrat&from=1&count=3'
const git = 'https://api.github.com/users/vduttrat'

const d1 = document.querySelector("#github")
const d2 = document.querySelector("#forces")
const d3 = document.querySelector("#subm")

const forcesReq = new XMLHttpRequest()
forcesReq.open('GET', forcesID)
forcesReq.send()
forcesReq.onreadystatechange = function(){
    if(forcesReq.readyState===4){
        const data = (JSON.parse(this.responseText)).result[0]
        console.log(data)
        d2.innerHTML = `
        <div style="text-align:center; margin: 2rem 2rem 2rem">
            <heading>Codeforces Stats</heading>
        </div>
<div>
        <content>
            <img src="${data.avatar}" alt="Codeforces user avatar"/>
            <ul>
                <li><span class="stathead">Handle</span>: ${data.handle}</li>
                <li><span class="stathead">Organization</span>: ${data.organization}</li>
                <li><span class="stathead">Rating</span>: ${data.rating}</li>
                <li>Friend of <span class="stathead">${data.friendOfCount}</span> users</li>
            </ul>
        </content>
</div>
`
    }
}

const gitReq = new XMLHttpRequest()
gitReq.open('GET', git)
gitReq.send()
gitReq.onreadystatechange = function(){
    if(gitReq.readyState===4){
        const data = JSON.parse(this.responseText)
        console.log(data)

        d1.innerHTML = `
        <div style="text-align:center; margin: 2rem 2rem 2rem">
            <heading>Github Stats</heading>
        </div>
<div>
        <content>
            
            <img src="${data.avatar_url}" alt="Github user avatar"/>
            <ul>
                <li><span class="stathead">Username</span>: ${data.login}</li>
                <li><span class="stathead">Repositories</span>: ${data.public_repos}</li>
            </ul>
        </content>
</div>
`
    }
}

const subReq = new XMLHttpRequest()
subReq.open('GET', submissions)
subReq.send()
subReq.onreadystatechange = function(){
    if(subReq.readyState===4){
        const data = (JSON.parse(this.responseText)).result
        console.log(data)

        d3.innerHTML = `
        <div style="text-align:center; margin: 2rem 2rem 0.5rem">
            <heading>Latest submissions [CF]</heading>
        </div>
<div>
        <content>
            <ul>
                <li>${data[0].problem.contestId} ${data[0].problem.index}. ${data[0].problem.name}<br> Verdict: ${data[0].verdict==="OK" ? "AC" : "WA"}</li><br>
                <li>${data[1].problem.contestId} ${data[1].problem.index}. ${data[1].problem.name}<br> Verdict: ${data[1].verdict==="OK" ? "AC" : "WA"}</li><br>
                <li>${data[2].problem.contestId} ${data[2].problem.index}. ${data[2].problem.name}<br> Verdict: ${data[2].verdict==="OK" ? "AC" : "WA"}</li><br>
            </ul>
        </content>
</div>
`
    }
}

const button1 = document.querySelectorAll('.gotoAbout')
const hero = document.querySelector('.page2')
const button2 = document.querySelectorAll('.gotoIntro')

const arr = Array.from(button1);
const arr2 = Array.from(button2);
arr.forEach((val)=>{
    val.addEventListener('click', ()=>{
        hero.className = "page2 second"
    })
})
arr2.forEach((val)=>{
    val.addEventListener('click',()=>{
        hero.className = "page2 first"
    })
})
