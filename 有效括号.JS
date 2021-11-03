/**
 * 
 * @param str 要判断的字符串
 * @returns 
 * 使用栈的数据结构解决此问题。栈的特性是只在一侧入栈或出栈。后进先出的原则
 * 本题解决思路为：将左括号和右括号分别放在两个数组中。定义一个数组模拟栈
 * 遍历目标字符串，
 * 若当前字符在左侧括号中，则添加到栈中。
 * 若当前字符不在左侧括号中，且在右侧括号中，
 *  - 若此时栈中无数据，则一定不是有效括号。
 *  - 若此时有数据，则判断当前字符在右括号中的索引和出栈数据在左侧数据中的索引是否相等，若不相等，则一定不是有效括号
 * 遍历完成后判断栈中是否五数据。无数据则为有效括号。有数据则不是有效括号
 */
function validParentheses(str){
  if(!str.length) return true;
  // 定义左侧各种括号
  const left = ['(','[','{'];
  const right = [')',']','}'];
  const len = str.length;
  const stack = [];
  for(let i=0;i<len;i++){
    if(left.indexOf(str[i]) !== -1){
      stack.push(str[i]);
    }else if(right.indexOf(str[i]) !== -1){
      if(!stack.length){
        return false;
      }else{
        if(left.indexOf(stack.pop()) !== right.indexOf(str[i])){
          return false;
        }
      }
    }
  };
  return !stack.length;
}
const str = '()[{}]';
const res = validParentheses(str);
console.log(res);