
import promptSync from 'prompt-sync';
import is_ip_private from 'private-ip'
const prompt = promptSync();
let ip = prompt('Enter an ip address:  ');
export var i = is_ip_private(ip);
if (i === true) {
    console.log("this is a private ip address");
}
else if (i === false) {
    console.log("this is  a public ip address");
}
else {
    console.log("This is not an i address at all")
}
//testing//

console.log(i);