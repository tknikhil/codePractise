const numArr=[1,2,3,7,9];
const target=11;

const findTwoNumber=function(nums,target) {
  for(let p1=0;p1<nums.length;p1++){
    const findingNumber=target-nums[p1];
    for(let p2=p1+1;p2<nums.length;p2++){
      if(findingNumber===nums[p2]){
        return [p1,p2];
      }
    }
  }
  return null;
}

console.log(findTwoNumber(numArr,target));