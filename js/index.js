
var BookmarkName= document.getElementById('BookmarkName')
var WebsiteURL= document.getElementById('WebsiteURL')
var BookmarkName = document.getElementById('BookmarkName')

var dataList = []
if(localStorage.getItem('datas')!=null){
    dataList = JSON.parse(localStorage.getItem('datas'))
displayName()
}

function main(){
    createInputName()
    displayName()
    clear()
    
    
}

function createInputName(){
    var data ={
        name: BookmarkName.value,
        url: WebsiteURL.value
    }
    if(check(BookmarkName.value)){

        dataList.push(data)
        localStorage.setItem('datas', JSON.stringify(dataList))
        
    }else{
            document.getElementById('alert').style.display = 'block'
    }

    if(checkurl(WebsiteURL.value)){

        dataList.push(data)
        localStorage.setItem('datas', JSON.stringify(dataList))
        
    }else{
        document.getElementById('alert2').style.display = 'block'
    }

}


function displayName(){
    var box = ''
    for(var i = 0; i < dataList.length; i++){
        box += `
        <tr>
        <td>${i}</td>
        <td>${dataList[i].name}</td>
        <td><a href="${dataList[i].url}" target="_blank" class="btn btn-visit"> <i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
        <td><button onclick="deletedata(${i})" class="btn btn-delete"><i class="fa-regular fa-trash-can pe-2"></i>Delete</button></td>
         </tr>
        
        `
    }
    document.getElementById('tbody').innerHTML = box
}

 function clear(){
    BookmarkName.value = ''
    WebsiteURL.value = ''
 }

 function deletedata(index){
    dataList.splice(index, 1)
    localStorage.setItem('datas', JSON.stringify(dataList))
    displayName()
 }

function check(word){
    var regex = /^[A-Z][a-z]{2,8}$/
    return regex.test(word)
}
function checkurl(word){
    var regex = /^https:[a-z./]{1,50}$/
    return regex.test(word)
}
  
