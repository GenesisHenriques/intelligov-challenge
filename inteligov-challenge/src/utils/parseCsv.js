export default function parseCSV(text) {
  const result = {
    header: [],
    data: [],
  };

  // A primeira linha do split foi para a variavel header e o restante para o variavel content
  const [header, ...content] = text.split('\n');
  result.header = header.split(';');

  content.forEach((item) => {
    result.data.push(item.split(';').slice(0, result.header.length));
  });
  result.data.pop();

  console.log(result);

  return result;
};