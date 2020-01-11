const myCalculate = () =>
  new Promise((reslove, reject) => {
    console.log('calculate for a long timeee')
    setTimeout(() => reslove(50), 2000)
  })

const app = async () => {
  const res = await myCalculate()
  console.log(res)
}

app()

const oldArr = [21312, 1111, 322, 11, 5000000]

const myMap = (arr, cb) => {
  const newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]))
  }
  return newArr
}

const newArr = myMap(oldArr, v => {
  return v + 100
})
  .filter(v => v > 1000)
  .reduce((acc, v) => {
    return (acc += v)
  }, 0)

console.log(newArr)
