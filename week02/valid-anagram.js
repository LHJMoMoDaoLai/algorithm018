
var isAnagram1 = function(s, t) {
    if(s.length !== t.length) return false
        let map = new Map()
        for(let i = 0; i < s.length; i ++) {
            if(map.has(s[i])){
                let count = map.get(s[i]);
                map.set(s[i], ++count)
            } else {
                map.set(s[i], 1)
            }
        }
    
        for(let i = 0; i < t.length; i ++) {
            if(map.has(t[i])){
                let count = map.get(t[i])
                map.set(t[i], --count)
            if(count == 0){
                map.delete(t[i])
            }
        }
    }
    return map.size === 0
}


var isAnagram2 = function(s, t) {
    if(s.length !== t.length) return false
    let hash = Array(26).fill(0)
    let aCode = "a".charCodeAt()
    let length = s.length;
    for(let i = 0; i < length; i ++) {
        hash[s[i].charCodeAt() - aCode] ++
        hash[t[i].charCodeAt() - aCode] --
    }
    
    for(let i of hash) {
        if(i != 0 ){
            return false
        }
    }
    return true
}

var isAnagram3 = function(s, t) {
    return s.split("").sort().join() === t.split("").sort().join()
}