//Problem 2

const draw = function(sym, num) {
	if(num === 0) {
		return "";
	}
	return sym + draw(sym, num-1);
};

const triangleStars = function(num) {
	let spaces = 0;
	while(num > 0) {
		console.log(draw(' ', spaces) + draw('*', (2*num)-1));
		num--, spaces++;
	}
};

triangleStars(7);


//Problem 3

const multiToSingle = function (SinArr) {
    let  ara = [];
    let  lgt = 0;
    while (lgt < SinArr.length) {
        let siAr = 0;
        while (siAr < SinArr[lgt].length) {
            ara[ara.length] = SinArr[lgt][siAr];
            siAr++;
        }
        lgt++;
    }
    return ara;
}
console.log(multiToSingle([["I", "Do"], ["Not", "Want"], ["To"], ["Fail"], ["This", "Course"]]));


//Problem 4

const min = function(arr) {
	let num = 0;
    let least = arr[num];
    while(num < arr.length){
    if(arr[num] < least){
      least = arr[num];
    }
    num++;
  }
  return least;
};

const max = function(arr) {
	let num = 0;
    let greatest = arr[num];
    while(num < arr.length){
      if(arr[num] > greatest){
      greatest = arr[num];
    }
    num++;
  }
  return greatest;
};

const findMinMax = function(array, condition) {
	let solution = 0
	if (condition === true){
		answer = max(array)
	} else if (condition === false) {
		answer = Min(array)
	}
	return answer
};
console.log(findMinMax([12,45,32,46,68,15,97,53,100],true));


//Problem 5

const forEach = function(arr, fun) {
	let ar1 = 0;
	while(ar1 < arr.length) {
		fun(arr[ar1]);
		ar1++;
	}
}
	forEach([4, 8, 15, 16, 23, 42], function(val) {
		console.log(val);
	});


//Problem 6

const sum = function(arr) {
    let add = 0;
    let num = 0;
    while(num < arr.length){
      add = add + arr[num];
      num++;
    }
  return(add);
};
console.log(sum([7,3,5,15,20,15,35]));


//Problem 7

const reverse = function(stg) {
  let lgt = stg.length;
  let a = "";
  while (lgt != 0) {
    lgt--;
    a = a + stg[lgt];
  }
  console.log(a);
};
reverse('dram');


//Problem 8

const checkerboard = function(lgt) {
    let num = 0;
    while (num < lgt) {
        if ( num %2 === 0) {
        console.log(("*"+" ").repeat(lgt));
    } else { 
    console.log((" "+"*").repeat(lgt));
        }
    num++;
  }
};
checkerboard(8);