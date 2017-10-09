const buf = new ArrayBuffer(32)
const dataView = new DateView(buf)

console.log(dataView.getUint8(0))
console.log(buf.byteLength)
console.log(ArrayBuffer.isView(buf)
