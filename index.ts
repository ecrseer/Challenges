let 
    valo: string[]=["2, 3, 4", "3"],
    finalValor:number,
    iniciValor:number=0,
    temos:string='';

    valo = valo.map(seq=>" "+seq+",");
    finalValor=valo[0].indexOf(',');
    
    
while(finalValor!=-1){           
    
    let
      varPrimeiroArr: string = valo[0]
        .slice(iniciValor,finalValor+1);//0,3

        
    let indxNumero: number 
        = valo[1].indexOf(varPrimeiroArr);
        
    
       if(indxNumero!=-1){
        let virg:number = 
         valo[1].indexOf(',',indxNumero);
        temos = temos +
            valo[1].slice(indxNumero,virg )+',';
        }

      //passa pra proxima ocorrencia de espaço e virgula
      finalValor=valo[0].indexOf(',',finalValor+1);
      iniciValor=valo[0].indexOf(' ',iniciValor+1);
         
    
}
temos =
    temos.slice(0,
        temos.lastIndexOf(',')
            );
      temos = temos.split(' ').join('');

console.log('temos|'+temos);