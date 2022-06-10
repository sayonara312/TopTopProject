function ConvertNumber(number) {
  let newnumber;
  if (number >= 10000 && number < 100000) {
    newnumber = (number / 1000).toFixed(2).toString() + 'K';
  } else if (number >= 100000 && number < 1000000) {
    newnumber = (number / 1000).toFixed(2).toString() + 'K';
  } else if (number >= 1000000) {
    newnumber = (number / 1000000).toFixed(2).toString() + 'M';
  } else newnumber = number;
  return newnumber;
}

export default ConvertNumber;
