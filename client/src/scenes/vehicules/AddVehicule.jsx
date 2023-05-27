import { Button, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {usePostChauffeurMutation, usePostVehiculeMutation} from "../../state/api";

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: "1rem",
  width: "300px",
}));

const AddChauffeur = (props) => {
  const [kilometrage, setKilometrage] = useState("");
  const [etat, setEtat] = useState("");
  const [matricule, setMatricule] = useState("");
  const [modele, setModele] = useState("");
  const [postVehicule] = usePostVehiculeMutation();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    postVehicule({ kilometrage, etat, matricule, modele });
    // go to /vehicules
    navigate("/vehicules");
    // props.handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <StyledTextField
        label="kilometrage"
        variant="filled"
        type="number"
        required
        value={kilometrage}
        onChange={(e) => setKilometrage(e.target.value)}
      />
      <StyledTextField
        label="matricule"
        variant="filled"
        required
        value={matricule}
        onChange={(e) => setMatricule(e.target.value)}
      />
      <StyledTextField
          label="etat"
          variant="filled"
          required
          value={etat}
          onChange={(e) => setEtat(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          sx={{ margin: "2rem" }}
          onClick={props.handleClose}
        >
          <Link
            to="/vehicules"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Cancel
          </Link>
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          AJOUTER
        </Button>
      </div>
    </form>
  );
};

export default AddChauffeur;
