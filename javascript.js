function blue(){
    document.body.classList.remove('dark-pink','dark-blue','pink')
}

function pink(){
    document.body.classList.remove('dark-pink','dark-blue')
    document.body.classList.add('pink')
}

function darkBlue(){
    document.body.classList.remove('pink','dark-pink')
    document.body.classList.add('dark-blue')
}

function darkPink(){
    document.body.classList.remove('pink','dark-blue')
    document.body.classList.add('dark-pink')
}

