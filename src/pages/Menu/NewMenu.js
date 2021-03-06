import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
import NewMenuItem from "./NewMenuItem";
import MenuEditForm from "./MenuEditForm";

//TODO: import items from backend to populate menu
//TODO: schema
//TODO: make the menu populate when accessed
//TODO: also route everything

function NewMenu(props) {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [menuItems, setMenuItems] = useState([]);

  const onFormSubmit = (event) => {};

  const history = useHistory();

  return (
    <div>
      <div>
        <NewMenuItem
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          newMenuProps={props}
        />
        <button
          onClick={() => {
            history.goBack();
          }}
          className="button solid "
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
export default NewMenu;
