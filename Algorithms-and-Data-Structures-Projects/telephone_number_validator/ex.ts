function telephoneCheck(str: string) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
 
  return regex.test(str);
}

// ^(1\s?) - talvez 1 no inicio talvez em um Parênteses. \s corresponde a espaço em branco.
  
export default telephoneCheck;