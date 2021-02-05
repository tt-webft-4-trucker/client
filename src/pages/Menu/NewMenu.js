import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import NewMenuItem from "./NewMenuItem";
import MenuEditForm from "./MenuEditForm";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div>
        <NewMenuItem
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          newMenuProps={props}
        />
      </div>
    </div>
  );
}
export default NewMenu;
