function getDigit(num, i) {
    return Number(("" + num)[("" + num).length - i - 1]) || 0;
}

  const result = getDigit(12345, 0);
  console.log(`result`, result);
