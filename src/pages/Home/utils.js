import React from 'react'
import { useHistory } from "react-router-dom";

const history = useHistory()

export const handleSearchSubmit = () => {
  history.push("/search");
}