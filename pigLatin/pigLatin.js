function pigLatin(string) {
    const result = string
        .match(/\w{1,}/g)
        .map(item => {
            if (/^[aiueo]+/g.test(item)) {
                return item+'ay'
            } else if (/^[^aiueo]{1}qu{1}\w?/g.test(item)){
                let result = [
                    ...item.slice(3)
                ]
                return result.concat(item[0]+item[1]+item[2]+'ay').join('')
            } else if (/^qu{1}\w?/g.test(item)){
                let result = [
                    ...item.slice(2)
                ]
                return result.concat(item[0]+item[1]+'ay').join('')
            } else if (/^[^aiueo]{1}[aiueo]+\w?/g.test(item)) {
                let result = [
                    ...item.slice(1),
                ]
                return result.concat(item[0]+'ay').join('')
            } else if (/^[^aiueo]{2}[aiueo]+\w?/g.test(item)) {
                let result = [
                    ...item.slice(2),
                ]
                return result.concat(item[0]+item[1]+'ay').join('')
            } else if (/^[^aiueo]{3}[aiueo]+\w?/g.test(item)) {
                let result = [
                    ...item.slice(3)
                ]
                return result.concat(item[0]+item[1]+item[2]+'ay').join('')
            }
        })
        .join(' ')
    console.log(result)
    return result
};
  
// Do not edit below this line
module.exports = pigLatin;
