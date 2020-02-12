const calculate = ({ result, operation, value }) => {
  if (value === "") {
    return result;
  }

  const num = parseInt(value);

  switch (operation) {
    case "+": {
      return result + num;
    }
    case "-": {
      return result - num;
    }
    case "*": {
      return result * num;
    }
    case "/": {
      return result / num;
    }
    case "=": {
      return num;
    }
    default: {
      throw Error("Unknown operation");
    }
  }
};

export default calculate;
