const digitalDecipher = (msg, key) => {
  let result = '';
  for (let i = 0; i < msg.length; i++) {
    key = key.toString();
    let new_ord = msg[i] - Number(key[i % key.length]);
    new_ord = new_ord % 26;
    result += String.fromCharCode(new_ord + 96);
  }

  return result;
}
