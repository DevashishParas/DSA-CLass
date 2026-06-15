function multiplier(factor){

    return function(number){
        return factor*number;

    }
}

const t=multiplier(3);
console.log(t(10));

