module.exports = function reverse(n) {
    let res = ''
    if(n<0) n = n.toString().slice(1)
    else n = n.toString()
    
    for (i = 0; i < n.length; i += 1) res = n[i] + res
    return res
}
