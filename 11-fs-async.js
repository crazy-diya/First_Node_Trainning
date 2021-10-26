const { readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf-8',(err, result1)=>{
    if(err){
        console.log(`Error is an ${err}`);
        return;
    }
    readFile('./content/second.txt',(err,result2)=>{
        if(err){
            console.log(err)
            return
        }

        console.log(`file 1 and file 2 data is : \n \t${result1} \n\t ${result2}`);

        writeFile(
            './content/result-async.txt',
            `new write file \n ${result2} \n ${result1}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return
                }
                console.log(`final anser is : \n ${result}`);
            }
            )
    })
})

