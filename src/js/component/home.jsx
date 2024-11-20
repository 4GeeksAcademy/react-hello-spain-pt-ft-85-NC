import React, { useState } from "react";



//create your first component
const LucesTrafico = () => {
	const [selectColor, setSelectColor] = useState("rojo");

const cambiarColorRandom = () => {
	const colores = ["rojo" , "ambar" , "verde"];
	const colorRandom = colores[Math.floor(Math.random() * colores.length)];
	setSelectColor(colorRandom);
	}


	return (
		<div className="padre">
		    <div className="palo"></div>
		        <div className="semaforo">
			      <div onClick={() => setSelectColor("rojo")} className={"luces rojo" + (selectColor === "rojo" ? " brillo" : "" )}></div>
			      <div onClick={() => setSelectColor("ambar")} className={"luces ambar" + (selectColor === "ambar" ? " brillo" : "" )}></div>
			      <div onClick={() => setSelectColor("verde")} className={"luces verde" + (selectColor === "verde" ? " brillo" : "" )}></div>			
		        </div>
				<button onClick={cambiarColorRandom} className="btn btn-primary mt-3">
				Color Aleatorio
			    </button>
		</div>
	);
};

export default LucesTrafico;
