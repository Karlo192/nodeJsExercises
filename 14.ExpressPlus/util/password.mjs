import bcrypt from "bcrypt";

const saltRounds = 12;
const plainTextPassword = "david";
const incorrectPassword = "anders"
const hashedPassword = "$2b$12$qxybJ7hpY89WYOypmKgqLOCX0xFEEC9PBXic1u/3L47MDYzgnYgAm";

bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
});

bcrypt.compare(plainTextPassword, hashedPassword, (error, result) => {
    console.log("Is the real password correct?", result);
});

bcrypt.compare(incorrectPassword, hashedPassword, (error, result) => {
    console.log("Is the  incorrect password correct?", result);
});

export default {}