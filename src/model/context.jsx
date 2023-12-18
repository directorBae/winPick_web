const fetchContext = async () => {
  const response = await fetch("context.json");
  const text = await response.json();
  return text;
};

const ContextData = await fetchContext();

export default ContextData;
