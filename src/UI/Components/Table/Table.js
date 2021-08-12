import React, { useEffect } from "react";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getItemAgeDemographic } from "../../redux/actions/userItems";

const Table = ({ col1, col2, item }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userItemReducer.users);
  const demographic = useSelector(
    (state) => state.userItemReducer.agedemographic
  );
  useEffect(() => {
    if (col1 === "username") {
      dispatch(getUsers());
    } else {
      dispatch(getItemAgeDemographic(item));
    }
  }, [dispatch, item]);
  return (
    <div className="tableContainer">
      <ul>
        <li>
          <p>{col1}</p>
          <p>{col2}</p>
        </li>
        {col1 === "username"
          ? users.map((user, i) => (
              <li key={i}>
                <p>{user.username}</p>
                <p>{user.age}</p>
              </li>
            ))
          : demographic.map((vals, i) => (
              <li key={i}>
                <p>{vals.age}</p>
                <p>{vals.count}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Table;
