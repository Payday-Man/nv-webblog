let user =[
    {
        "name" :'Pavit',
        "lastname" : "chansamrit",
        "email" : "cell_god@hotmail.com",
        "From" : "Thailand"
    },
    {
        "name" :'1Pavit',
        "lastname" : "1chansamrit",
        "email" : "1cell_god@hotmail.com",
        "From" : "1Thailand"
    }
    ]
    let userA = {
        "name": "AAA",
        "lastname": "BBB",
        "email" : "123456789@gmail.com",
        "From" : "USA"
    }
    let userB = {
        "name": "CCC",
        "lastname": "DDD",
        "email" : "987654321@gmail.com",
        "From" : "England"
    }
    user.push(userA)
    user.push(userB)


    //-----------------------------------//
    let userSelect = user.splice(2,2)

    for (let i = 0 ;i < user.length ;i++) {
    console.log(user[i].name + ' ' + user[i].lastname)
    }

    console.log("-------------------")

    for(let i = 0; i < userSelect.length; i++) {
        console.log(userSelect[i].name +' '+ userSelect[i].lastname)
    }