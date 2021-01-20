function numeroEmArray(vl:number):number[]{
    let
        restos:number[] = [vl%10];
        vl=Math.floor(vl/10)
        while(vl>8){
            restos.push(vl%10);
            vl=Math.floor(vl/10)
        }
        restos.push(vl);
        
        return restos;       
    
}
function potencia(_y:number,indi:number):number{
    let pot:number=10**(numeroEmArray(_y).length-indi)
    return pot;
}
function reverse(x: number): number {
    console.log(numeroEmArray(x));
    let mvl:number=
    numeroEmArray(x).reduce((acumul,atualV,indice)=>{        
       return acumul+atualV*potencia(x,indice+1);
    },0);
    return  mvl;
    
};

console.log(//4623
    reverse(3264)
);