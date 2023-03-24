function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    "button",
    {
      onClick: () => setIsClicked(true),
    },
    isClicked ? "Clicked" : "Clicked here!"
  );
}
//리액트를 사용하지 않았을 때의 코드(매우 복잡하다)

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(MyButton), domContainer);
