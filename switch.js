// exercise on the SWITCH
// admin, moderator or guest???
// print in console

let role = 'Moderator';

switch (role.toLocaleLowerCase()){
    case 'admin':
    console.log('Admin User');
    break;
    case 'moderator':
    console.log('Moderator User');
    break;
    default:
    console.log('Just normal User');
}