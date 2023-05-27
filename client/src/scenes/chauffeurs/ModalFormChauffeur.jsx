import { Button, styled, TextField } from "@mui/material";
import React, { useState } from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: "1rem",
  width: "300px",
}));

const ModalFormChauffeur = (props) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [matricule, setMatricule] = useState("");
  const [telephone, setTelephone] = useState("");
  const [etat, setEtat] = useState("");
  const [categorie, setCategorie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password);
    props.handleClose();
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
          value={nom}
          onChange={(e) => setTelephone(e.target.value)}
      />
      <StyledTextField
          label="etat"
          variant="filled"
          required
          value={nom}
          onChange={(e) => setEtat(e.target.value)}
      />
      <StyledTextField
          label="categorie"
          variant="filled"
          required
          value={nom}
          onChange={(e) => setCategorie(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          sx={{ margin: "2rem" }}
          onClick={props.handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          UPDATE
        </Button>
      </div>
    </form>
  );
};

export default ModalFormChauffeur;
