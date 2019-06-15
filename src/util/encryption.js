export const encrypt = (str, shift) => Array.from(str).map(v => v.charCodeAt() + shift).join(',')
export const decrypt = (str, shift) => String.fromCharCode(...str.split(',').map(v => Number(v) + shift))
export const shiftString = (str, shift) => str.split('').map(v => String.fromCharCode(v.charCodeAt() + shift)).join('')
