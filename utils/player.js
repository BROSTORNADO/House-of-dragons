function player(data){

Object.assign(this,data)

this.getplayerhtml = function(){

const {name , avatar , health } = this
 

 
        return `
            
            <div class="player-card">

                <h2 class="name"> ${name} </h2>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
             
              
            <div>
            `
}



this.takedamage = function(ok){

if(this.health > 0){
    
    this.health -= ok


}
else if(this.health === 0){
    this.isdead = true
    this.getplayerhtml=function(){

        const {name , avatar , health } = this
         
        
         
                return `
                    
                    <div class="player-card im-dead">
        
                        <h2 class="name"> ${name} </h2>
                        <img class="avatar" src="${avatar}" />
                        <div class="health"> <b> DEAD  </b></div>
                     
                      
                    <div>
                    `
        }
}
else{
    this.health = 0
    this.isdead = true
    this.getplayerhtml=function(){

        const {name , avatar , health } = this
         
        
         
                return `
                    
                    <div class="player-card im-dead">
        
                        <h2 class="name"> ${name} </h2>
                        <img class="avatar" src="${avatar}" />
                        <div class="health"> <b> DEAD  </b></div>
                     
                      
                    <div>
                    `
        }
   
}
}


}

export default player