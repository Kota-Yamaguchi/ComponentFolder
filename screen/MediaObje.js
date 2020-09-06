import React from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme:Theme)=>createStyles({
	container : {
			margin : "5px auto 5px auto",
			width : "40vw",
				
			display : "flex",
			background :"#FFF",
			border:"solid 3px",
			borderRadius:"10px"
		},
	context:{
		display:"block"
		},
	
	img:{	
		margin :"10px 10px 10px 10px ",
		borderRadius:"50%",
		width: "80px",
		height:"80px"
		},
	the : {
		
		fontWeight:"bold",
		
		}

})
)


function MediaObject(props){
	const classes = useStyles();
	
	return (
		<Box className={classes.container} >
			<img src="/static/image/cafeback.jpg" className={classes.img } />
			<Box className= {classes.context}>
			<div className = {classes.the} >Store : {props.storeName}</div>
			<Rating name="evaluation" defaultValue={props.impression} precision={1} readOnly={true}/>
			<div> {props.mutter}</div>
			</Box>
			
		</Box>

	);



}


export default MediaObject;


