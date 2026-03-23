export const validateName = (name) => {
    if (!name) {
        return "";
    }
    if (!/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name)) return "Name is not valid";
    return "";
};
export const validateEmail = (email) => {
    if (!email) {
        return "";
    }
    if (!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) return "Email is not valid";
    return "";
};
export const validatePassword = (password) => {
    if (!password) {
        return "";
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) return "Password is not valid";
    return "";
};
