import Word from "./Word";

const Words = ({ words, isChecked, filterLetter }) => {
    const list = !isChecked ? words : filterLetter
    console.log(words)
  return (
    <div>
      {list.map((item) => (
        <Word key={item.id} word={item.title} />
      ))}
    </div>
  );
};

export default Words;
