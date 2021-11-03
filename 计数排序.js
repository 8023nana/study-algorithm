function countSort(arr){
  if(!arr || arr.length<=1) return arr;
  const len = arr.length;
  // 输出的结果数组
  const resArr = new Array(len);
  // 计数数组
  let countArr;
  let min = max = arr[0];
  // 统计出现次数
  for(let i=0;i<len;i++){
    // 若是存在这个值就证明出现过，出现次数+1/若不存在证明是第一次出现就为 1
    // countArr[arr[i]] = countArr[arr[i]] ? countArr[arr[i]]+1 : 1;
    // 找到最小值
    // min = min <= arr[i] ? min : arr[i];
    // 找到最大值
    max = max >= arr[i] ? max : arr[i];
  }
  // 确定计数数组的长度
  countArr = new Array(max + 1).fill(0);
  // 填充统计数组
  for(let i=0;i<len;i++){
    // 以数组中出现的数字作为填充数组的下标，每出现一次就+1
    countArr[arr[i]]++;
  }
  console.log('countArr', countArr);
  // 遍历统计数组，输出结果
  let index = 0;
  for(let i=0;i<countArr.length;i++){
    for(let j=0;j<countArr[i];j++){
      // 只有当j有值时才会像结果数组中添加值
      // i 是下标，代表了原数组中的值
      resArr[index++] = i;
    }
  }
  return resArr;
}
const arr = [1,3,6,8,11,2,5,7,3,23];
const res = countSort(arr);
console.log(res, res.length);