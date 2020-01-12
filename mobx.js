const { observable, computed, autorun } = require('mobx')

var numbers = observable([1, 2, 3])
var user = observable({ name: 'paiboon', lname: 'aun' })

var sum = computed(() => numbers.reduce((a, b) => a + b, 0))

var disposer = autorun(() => console.log(sum.get()))
// prints '6'
numbers.push(4)
// prints '10'

autorun(() => console.log(user.name, user.lname))

user.name = 'test'

user.lname = 'hiii'

// disposer()
numbers.push(5)
numbers.push(10)
