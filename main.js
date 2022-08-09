let inp=document.querySelector("#change");
let tBody=document.querySelector("tbody")
let table=document.querySelector("table")
let dropZone=document.querySelector(".drop-zone")
console.log(tBody.firstElementChild);
inp.addEventListener("change",function(e){
    let files=Array.from(e.target.files);
    files.forEach((file)=>{
        showImage(file)
    })
    
    
})
dropZone.addEventListener("drop",function(e){
    e.preventDefault();
    console.log(e);
    let files=Array.from(e.dataTransfer.files);
    files.forEach((file)=>{
        showImage(file)
    })
})
function showImage(file) {

    if (!file.type.includes("image/")) {
        return
    }
    const fileReader=new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("loadend",function(){
        let src=fileReader.result;
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")
        let td4=document.createElement("td")
        let tdSize=document.createElement("td")
        let td5=document.createElement("td")
        let img=document.createElement("img")
        let deleteBtn=document.createElement("button")
        deleteBtn.className="btn btn-danger"
        deleteBtn.innerText="Delete"
        img.src=src
        img.style.width="100%"
        td1.className="no";
        tr.append(td1)
        tr.append(td2)
        td2.append(img)
        tr.append(td3)
        td3.innerText=file.name
        tr.append(td4)
        td4.innerText=file.type
        tdSize.innerText=(file.size/1024).toString().substring(0,5)+" kb"
        tr.append(tdSize)
        tr.append(td5)
        td5.style.display="flex"
        td5.style.alignItems="center"
        td5.style.justifyContent="center"
        td5.append(deleteBtn)
        tBody.append(tr)
        let nos=document.querySelectorAll(".no")
        
        if (tBody.firstElementChild) {
            table.style.display="inline-table"
        }
        
        for (let i = 0; i < nos.length; i++) {
            nos[i].innerText=i
            
        }
        deleteBtn.addEventListener("click",function(){
            deleteBtn.parentElement.parentElement.remove()
            
            let nos=document.querySelectorAll(".no")
            for (let i = 0; i < nos.length; i++) {
                nos[i].innerText=i
                
            }
            if (!tBody.firstElementChild) {
                table.style.display="none"
            }
            
        })
    })
    
}
dropZone.addEventListener("dragover",function(e){
    e.preventDefault();
})


