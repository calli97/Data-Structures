class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
    setNext(next){
        this.next=next
    }
    dropNext(){
        this.next=null
    }
    getData(){
        return this.data
    }
    setData(data){
        this.data=data
    }
}
module.exports=Node