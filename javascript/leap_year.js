let year=2022;
console.log(isLeapYr(year));


function isLeapYr(yr){
    let step1=yr%4;
    //console.log(step1);
    if(step1){
        return `Not Leap Year`;
    }else{
        let step2=yr%100;
        //console.log(step2);
        if(step2){
            return `Leap Year`;
        }else{            
            let step3=yr%400;
            //console.log(step3);
            if(step3) return `Not Leap Year`;

            return `Leap Year`;

        }
    }
    
    
}