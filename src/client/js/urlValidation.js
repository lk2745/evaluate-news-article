function validURL(inputUrl)
{
    var regex = inputUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(regex == null){
         return 0;
     } else{
     return 1;
     }
 }

export { validURL }
