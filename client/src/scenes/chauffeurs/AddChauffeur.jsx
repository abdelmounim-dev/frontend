import { Button, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {usePostChauffeurMutation} from "../../state/api";

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: "1rem",
  width: "300px",
}));

const AddChauffeur = (props) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [matricule, setMatricule] = useState("");
  const [telephone, setTelephone] = useState("");
  const [etat, setEtat] = useState("");
  const [categorie, setCategorie] = useState("");
  const [postChauffeur] = usePostChauffeurMutation();

    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    postChauffeur({nom, prenom, email, matricule, telephone, etat, categorie});
    // props.handleClose();
    navigate("/chauffeurs");
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
        label="nom"
        variant="filled"
        required
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <StyledTextField
        label="prenom"
        variant="filled"
        required
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />
      <StyledTextField
        label="Email"
        type="email"
        variant="filled"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledTextField
        label="matricule"
        variant="filled"
        required
        value={matricule}
        onChange={(e) => setMatricule(e.target.value)}
      />
      <StyledTextField
        label="telephone"

        variant="filled"
        required
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
    />
      <StyledTextField
          label="etat"
          variant="filled"
          required
          value={etat}
          onChange={(e) => setEtat(e.target.value)}
      />
      <StyledTextField
          label="categorie"
          variant="filled"
          required
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          sx={{ margin: "2rem" }}
          onClick={props.handleClose}
        >
          <Link
            to="/chauffeurs"
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
