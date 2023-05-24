import React from "react";
import { Box, Button, Dialog, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetChauffeurQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import ModalFormChauffeur from "./ModalFormChauffeur";
import { useState } from "react";

const Customers = () => {
  const theme = useTheme();
  // const { data, isLoading } = useGetChauffeurQuery();
  const isLoading = false;
  const [open, setOpen] = useState(false);
  const [selectedChauffeur, setSelectedChauffeur] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const onDeleteChauffeur = () => {
    console.log("hna tab3et request te3 delete Chauffeur ctt");
  };
  const data = [
    {
      _id: "Imm",
      matricule: "123",
      nom: "123",
      email: "123",
      telephone: "123",
      etat: "123",
    },
    {
      _id: "Roi",
      matricule: "123",
      nom: "123",
      email: "123",
      telephone: "123",
      etat: "123",
    },
  ];

  const columns = [
    {
      field: "matricule",
      headerName: "Matricule",
      flex: 1,
      editable: true,
    },
    {
      field: "nom",
      headerName: "Nom",
      flex: 0.5,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "telephone",
      headerName: "Telephone",
      flex: 0.5,
      // renderCell: (params) => {
      //   return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      // },
      editable: true,
    },
    {
      field: "etat",
      headerName: "etat",
      flex: 0.4,
      editable: true,
    },
    {
      field: "update",
      headerName: "Update",
      sortable: false,
      flex: 1,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();

          const { api } = params;
          const thisRow = {};
        };
        return (
          <div style={{ display: "flex", gap: 8 }}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#21295c",
                borderRadius: 10,
                padding: "6px 8px",
                fontSize: 12,
              }}
              onClick={handleOpen}
            >
              Modifier
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#f00",
                borderRadius: 10,
                padding: "6px 8px",
                fontSize: 12,
              }}
              onClick={onDeleteChauffeur}
            >
              Supprimer
            </Link>
          </div>
        );
      },
    },
    // {
    //   field: "occupation",
    //   headerName: "Occupation",
    //   flex: 1,
    // },
    // {
    //   field: "role",
    //   headerName: "Role",
    //   flex: 0.5,
    // },
  ];

  return (
    <>
      <Box m="1.5rem 2.5rem">
        <Header title="CHAUFFEURS" subtitle="Liste des Chauffeurs" />
        <Link
          to={"/chauffeurs/add"}
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#f00",
            borderRadius: 5,
            padding: "6px 8px",
            fontSize: 12,
          }}
          onClick={handleOpen}
        >
          Ajouter un Chauffeur
        </Link>
        <Box
          mt="40px"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.light,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns}
          />
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <ModalFormChauffeur
          handleClose={handleClose}
          selectedChauffeur={selectedChauffeur}
        />
      </Dialog>
    </>
  );
};

export default Customers;
