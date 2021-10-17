export default function Button({ text, classes, onClickHandler }) {
  return (
    <button className={"btn " + classes} onClick={onClickHandler}>
      {text}
    </button>
  );
}
