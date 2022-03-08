
const doctor = {
    name: 'Pippo',
    surgeon(){
        console.log('THIS DOCTOR IS A SURGEON!')
    }
}

// console.log(doctor, doctor.surgeon());

// NORMAL STUFF HERE BUT IDK WHY IT LOOKS DIFFENT DOING IT WITH JS THAN JAVA OR C#
// for (let key in doctor) // we call a return variable key that will cycle in doctor
//     console.log(key + ': ' + doctor[key])   // with key we print the name of the KEYS of the obj doctor
                                            // with nameObj[key] we print the value of the key..

// an object is a collection of key, value pairs

// for (let key of Object.keys(doctor))    // we use the keyword KEY and we FOR OF iterate the OBJECT.KEYS(nameObject)
//     console.log(key, doctor[key]);      // we print the key name with KEY, we print the values with nameObject[key]

for (let entry of Object.keys(doctor))
    console.log(entry);