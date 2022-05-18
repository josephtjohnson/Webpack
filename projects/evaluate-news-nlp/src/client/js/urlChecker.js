function checkForURL(inputURL) {
    console.log("::: Running checkForURL :::", inputURL);
    
    inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (inputURL == null) {
        alert.('Please use a valid URL');
        return false;
    }
    
    return true;
};

export { checkForName }
