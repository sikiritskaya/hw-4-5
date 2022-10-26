import Word from "./Word";

const Words = ({ words, isChecked, filterLetter }) => {
    const list = !isChecked ? words : filterLetter
  return (
    <div>
      {list.map((item, index) => (
        <Word key={index} word={item} />
      ))}
    </div>
  );
};

export default Words;
