import React from "react";
import todoufuken from "../data/todoufuken";

const TodoufukenSelector = (props) => {
  return (
    <div>
      <select name="" id="" onChange={props.todoufukenChangeHandler}>
        <option value="">都道府県を選択してください</option>
        {todoufuken.map((v, i) => {
          return (
            <option key={i} value={v}>
              {" "}
              {v}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default TodoufukenSelector;
