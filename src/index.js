module.exports = function reverse (n) {
    if (n<0) {
        n=-n;
    }
    const str = n.toString();
    let res = '';
    for (let i = str.length-1; i>=0; i-- ){
       res = res+ str[i];
    } 
  
    return Number(res)
}
