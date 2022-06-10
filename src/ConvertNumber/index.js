function ConvertNumber(number) {
  let newnumber;
  if (number >= 10000) {
    if (number >= 1000000) {
      newnumber = (number / 1000000).toString() + 'M';
    } else newnumber = (number / 10000).toString() + 'K';
  } else newnumber = number;
  return newnumber;
}

export default ConvertNumber;
