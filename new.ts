export{

}
interface usersname {
    name : string,
    age : number,
    surname : string
    mylanguage : ()=>string
}

let users : usersname = {
    name : "mihir",
    age : 21,
    surname : "lakhlani",
    mylanguage : function(){
        return "typescript"
    }
}

console.log(users.mylanguage());