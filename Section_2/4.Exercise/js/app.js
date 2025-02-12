function showInfo() {
    var mostafa={
        fName:'Mostafa',
        lName:'Hosseini',
        age:32,
        phoneNumber:'09358758908',
        address:{
            proviance:'Alborz',
            city:'Karaj',
            allay:'Golshahr'
        },
        famillyMembers:{
            father:'Khodabakhsh',
            mother:'Efat',
            brothers:[
                'Mohammad',
                'Davood',
                'Ali',
                'Mehdi',
                'Morteza',
                'Amir'
            ],
            sisters:['Layla','Lidal']
        },
        friends:['Omid']
    }
    console.table(mostafa);
}