const Node=require('./Node')

class List{
    constructor(){
        this.root=null
    }
    push(data){
        if(this.root==null){
            const aux=new Node(data)
            this.root=aux
        }else{
            const newNode=new Node(data)
            let aux=getEndOfList(this)
            aux.next=newNode
        }
    }
    pop(){
        if(this.root==null){
            return null
        }else{
            let aux1=this.root
            let aux2=aux1.next
            if(aux2==null){
                aux1.data=null
                this.root=null
                return
            }
            while(aux2!==null){
                aux2=aux2.next
                aux1=aux1.next
            }
            aux1.data=null
        }
    }
    shift(){
        if(this.root==null){
            return null
        }else{
            let aux1=this.root
            let aux2=aux1.next
            //const data=aux1.data
            this.root=aux2
            //return data
        }
    }
    unshift(data){
        if(this.root==null){
            this.root=new Node(data)
        }else{
            const newNode=new Node(data)
            newNode.next=this.root
            this.root=newNode
        }
    }
}
function getEndOfList(list) {
    let aux=list.root
    while(aux.next!==null){
        aux=aux.next
    }
    return aux
}
module.exports=List