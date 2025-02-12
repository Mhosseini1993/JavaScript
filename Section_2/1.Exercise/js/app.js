function showInfo() {
    var fName = document.getElementById('FirstName').value;
    var lName = document.getElementById('LastName').value;
    var age = document.getElementById('Age').value;
    var city = document.getElementById('City').value;

    if (fName == '') {
        alert('First Name can not be empty');
        return;
    }
     if (lName == '') {
        alert('Last Name can not be empty');
        return;
    }
    if (age == '' || (age<0 || age>120)) {
        alert('Age is invalid');
        return;
    }
    if (city == '') {
        alert('City can not be empty');
        return;
    }

    var strInfo = 'My name is ' + fName + ' ' + lName +
        ', I have ' + age + ' years old.' +
        'I\'m living in ' + city;
        
    alert(strInfo);
}