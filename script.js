

const inputEl=document.getElementById("input-el")
let myLeads=[]
let oldLeads=[]
const ulEl=document.getElementById("ul-el");

const inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")
const saveBtn=document.getElementById("save-btn")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++){
          listItems += "<li><a target='_blank' href='#'>" + leads[i] + "</a></li>";
          }
    ulEl.innerHTML=listItems;
}
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

saveBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    console.log( localStorage.getItem("myLeads") )
})




