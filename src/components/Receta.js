import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

// Modal
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Receta({ receta, img, id }) {
  const { guardarIdReceta, informacion, guardarReceta } = useContext(
    ModalContext
  );

  // Configuracion del Modal de Material-UI:
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="col-lg-3 mb-4">
      <div className="card">
        <h2 className="card-header">{receta}</h2>
        <img className="card-img-top" src={img} alt="drink_img" />
        <div className="card-body">
          <button
            type="button"
            onClick={() => {
              guardarIdReceta(id);
              guardarReceta({});
              handleOpen();
            }}
            className="mt-2 btn btn-block btn-primary"
          >
            Ver Más
          </button>
          <Modal
            open={open}
            onClose={() => {
              handleClose();
              guardarIdReceta(null);
            }}
          >
            <div stlye={modalStyle} className={classes.paper}>
              <h2>{informacion.strDrink}</h2>
              <h3 className="mt-4">Instrucciones para preparar el trago:</h3>
              <p>{informacion.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={informacion.strDrinkThumb}
                alt="imagen_trago"
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Receta;
