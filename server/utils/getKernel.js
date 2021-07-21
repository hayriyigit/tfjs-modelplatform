const { filter } = require('mathjs');
const math = require('mathjs');

const getKernel = async (array, filtershape) => {
  var array_copy = new Array(...array);
  var filter_size = filtershape[3];
  const kernel_size = filtershape[0] * filtershape[1];
  let cursor = 0;
  let index = 0;
  let result = [];
  let temp = [];
  while (true) {
    temp.push(await array_copy.splice(cursor, 1)[0]);
    cursor += filter_size - 1;
    index += 1;

    if (filter_size === 0) {
      break;
    }

    if (cursor >= array_copy.length) {
      filter_size -= 1;
      cursor = 0;
    }
    if (index === kernel_size) {
      index = 0;

      result.push(temp);
      temp = [];
    }
  }
  return result;
};

module.exports = getKernel;
