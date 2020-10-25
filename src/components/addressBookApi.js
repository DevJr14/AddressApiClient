const baseURL = "https://localhost:44301/api/contacts";

const addressApiRoutes = (action, value = "") => {
    switch (action) {
        case "getWithQuery":
            return baseURL + `?name=${value}`;       
        case "post":
            return baseURL;
        case "getContactDetail":
            return baseURL + `/${value.contactId}/contactdetail/${value.contactDetailId}`;
        case "put":
            return baseURL + `/${value}`;
        default:
            break;
    }
}

//Validators
const numbersRegExp = /^[0-9\+]{10,10}$/;
var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const isEmpty = (object) => Object.values(object).some(x => x.toString().trim() == '');

const isCellValid = (contactDetail) => {

    if (!contactDetail.cell.match(numbersRegExp) || contactDetail.cell.length < 9){
        return false;
    }
    return true; //Correct format and length
};

const isTelValid = (contactDetail) => {    

    if (!contactDetail.telephone.match(numbersRegExp)){
        return false;
    }
    return true; //Correct format and length
}

const isValidEmail = (contactDetail) => {

    if (!contactDetail.email.match(emailRegExp)){
        return false;
    }
    return true; //Correct format and length
}

export { addressApiRoutes, isValidEmail, isEmpty, isCellValid, isTelValid };
