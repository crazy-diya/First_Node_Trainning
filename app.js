// globaly dependancy install packages
// npm install -g <packageName> 

//local dependancy install packages
//npm i <packageName>

// local dependancy remove
// npm uninstall <package name>

// packages.json
// npm init -> ( step by step )
// npm init -y ( default )

const _ = require('lodash')

const items = [1,[2,[3,[4,5]]]]

const newItem = _.flattenDeep(items)
console.log(newItem)