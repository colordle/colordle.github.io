
let color = document.getElementById('color')
let alertbox = document.getElementById('alertbox')
let body = document.getElementsByTagName('body')[0]

var nb_ligne = 1
var game_alive = true


var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

color.style.backgroundColor = 'rgb(' + r + ',' + g  + ',' + b + ')'
reponse = document.getElementById('reponse')



function higher_lower(a,b){
    if (a<b){
        return "↓"
    }if(a>b){
        return "↑"
    }else{
        return "✓"
    }
}

function verifier(){

    

    r_a = parseInt(document.getElementById("r" + nb_ligne).value)
    g_a = parseInt(document.getElementById("g"+ nb_ligne).value)
    b_a = parseInt(document.getElementById("b"+ nb_ligne).value)

    

    if(r_a > 255 | g_a > 255 | b_a > 255){
        alertbox.textContent = 'The maximum number is 255 !'
        body.style.animation = 'shake 0.5s ease'
        body.style.animation = None
    }else if(isNaN(r_a)| isNaN(g_a) | isNaN(b_a)){
        alertbox.textContent = "You did not enter a number!"
        body.style.animation = 'shake 0.5s ease'
        body.style.animation = None
    }
    else{
        document.getElementById("c"+nb_ligne).style.backgroundColor = 'rgb(' + r_a + ',' + g_a  + ',' + b_a + ')'
        event.target.remove()
        document.getElementById('hl_r'+ nb_ligne).textContent = higher_lower(r,r_a)
        document.getElementById('hl_g'+ nb_ligne).textContent = higher_lower(g,g_a)
        document.getElementById('hl_b'+ nb_ligne).textContent = higher_lower(b,b_a)
    
        nb_ligne += 1

        if(r === r_a && g === g_a && b === b_a){
            game_alive = false
        }else{
            creer_ligne()
        }
    }
    
    
}





























function creer_ligne(){
    

        div = document.createElement('div')
        div.id = "repondre" + nb_ligne
        div.classList.add("repondre")
        document.getElementById('lignes').appendChild(div)

        c = document.createElement('div')
        c.id = "c" + nb_ligne
        c.classList.add("c")

        div.appendChild(c)

        hl_r = document.createElement('p')
        hl_r.id = 'hl_r'+ nb_ligne
        hl_r.classList.add('higher_lower')

        input_r = document.createElement('input')
        input_r.type = 'text'
        input_r.id = "r"+ nb_ligne

        
        div.appendChild(input_r)
        div.appendChild(hl_r)

        

        hl_g = document.createElement('p')
        hl_g.id = 'hl_g'+ nb_ligne
        hl_g.classList.add('higher_lower')

        input_g = document.createElement('input')
        input_g.type = 'text'
        input_g.id = "g"+ nb_ligne

        
        div.appendChild(input_g)
        div.appendChild(hl_g)

        

        hl_b = document.createElement('p')
        hl_b.id = 'hl_b'+ nb_ligne
        hl_b.classList.add('higher_lower')

        input_b = document.createElement('input')
        input_b.type = 'text'
        input_b.id = "b"+ nb_ligne

        
        div.appendChild(input_b)
        div.appendChild(hl_b)

        btn = document.createElement('button')
        btn.id = "valider"
        btn.onclick = function(){
            verifier()
        }
        btn.textContent = 'Enter'
        
        div.appendChild(btn)
}