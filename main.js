	// show metadata in console
	function getMetadataForFileList(fileList) {
		for (const file of fileList) {
			// Not supported in Safari for iOS.
			const name = file.name ? file.name : 'NOT SUPPORTED';
			// Not supported in Firefox for Android or Opera for Android.
			const type = file.type ? file.type : 'NOT SUPPORTED';
			// Unknown cross-browser support.
			const size = file.size ? file.size : 'NOT SUPPORTED';
			console.log({file, name, type, size});
		}
	}

	// start calculation after choosing file
 	const inputElement = document.getElementById("input");
    inputElement.addEventListener("change", handleFiles, false); 
	 
	
 	function handleFiles() {
        const fileList1 = this.files; 
		console.log(fileList1);
        var reader = new FileReader();
		reader.readAsText(fileList1[0], 'utf-8')
		reader.onload = function(evt) {
			if (document.getElementById('El').checked && document.getElementById('Komma').checked && document.getElementById('Ja').checked && document.getElementById('Error_nein').checked) {
			elementKommaMittelwertJa(evt.target.result);
			} 
			else if (document.getElementById('El').checked && document.getElementById('Komma').checked && document.getElementById('Nein').checked && document.getElementById('Error_nein').checked) {
			elementKommaMittelwertNein(evt.target.result);
			}
			
			else if (document.getElementById('El').checked && document.getElementById('Punkt').checked && document.getElementById('Ja').checked && document.getElementById('Error_nein').checked) {
			elementPunktMittelwertJa(evt.target.result);
			}
           	else if (document.getElementById('El').checked && document.getElementById('Punkt').checked && document.getElementById('Nein').checked && document.getElementById('Error_nein').checked) {
			elementPunktMittelwertNein(evt.target.result);
			} 	
			
		    else if (document.getElementById('Ox').checked && document.getElementById('Komma').checked && document.getElementById('Ja').checked && document.getElementById('Error_nein').checked) {
			oxideKommaMittelwertJa(evt.target.result);
			}
			else if (document.getElementById('Ox').checked && document.getElementById('Komma').checked && document.getElementById('Nein').checked && document.getElementById('Error_nein').checked) {
			oxideKommaMittelwertNein(evt.target.result);
			}
			
			else if (document.getElementById('Ox').checked && document.getElementById('Punkt').checked && document.getElementById('Ja').checked && document.getElementById('Error_nein').checked) {
			oxidePunktMittelwertJa(evt.target.result);
			}
			else if (document.getElementById('Ox').checked && document.getElementById('Punkt').checked && document.getElementById('Nein').checked && document.getElementById('Error_nein').checked) {
			oxidePunktMittelwertNein(evt.target.result);
			}
			//error raus ab hier
			else if (document.getElementById('El').checked && document.getElementById('Komma').checked && document.getElementById('Ja').checked && document.getElementById('Error_ja').checked) {
			elementKommaMittelwertJaError(evt.target.result);
			} 
			else if (document.getElementById('El').checked && document.getElementById('Komma').checked && document.getElementById('Nein').checked && document.getElementById('Error_ja').checked) {
			elementKommaMittelwertNeinError(evt.target.result);
			
			}
			else if (document.getElementById('El').checked && document.getElementById('Punkt').checked && document.getElementById('Ja').checked && document.getElementById('Error_ja').checked) {
			elementPunktMittelwertJaError(evt.target.result);
			}
           	else if (document.getElementById('El').checked && document.getElementById('Punkt').checked && document.getElementById('Nein').checked && document.getElementById('Error_ja').checked) {
			elementPunktMittelwertNeinError(evt.target.result);
			
			} 	
		    else if (document.getElementById('Ox').checked && document.getElementById('Komma').checked && document.getElementById('Ja').checked && document.getElementById('Error_ja').checked) {
			oxideKommaMittelwertJaError(evt.target.result);
			}
			else if (document.getElementById('Ox').checked && document.getElementById('Komma').checked && document.getElementById('Nein').checked && document.getElementById('Error_ja').checked) {
			oxideKommaMittelwertNeinError(evt.target.result);
			
			}
			else if (document.getElementById('Ox').checked && document.getElementById('Punkt').checked && document.getElementById('Ja').checked && document.getElementById('Error_ja').checked) {
			oxidePunktMittelwertJaError(evt.target.result);
			}
			else if (document.getElementById('Ox').checked && document.getElementById('Punkt').checked && document.getElementById('Nein').checked && document.getElementById('Error_ja').checked) {
			oxidePunktMittelwertNeinError(evt.target.result);
			}
			
				
			else {
				alert("In jedem Block muss eine Auswahl getroffen werden ausgewählt sein");
			}
        }

    }   

	// Header Strings
	var header_El = "Element	Bescheibung	Methode	Auswertung	Na	Na_error	Mg	Mg_error	Al	Al_error	Si	Si_error	P	P_error	S	S_error	Cl	Cl_error	K	K_error	Ca	Ca_error	Ti	Ti_error	V	V_error	Cr	Cr_error	Mn	Mn_error	Fe	Fe_error	Co	Co_error	Ni	Ni_error	Cu	Cu_error	Zn	Zn_error	Ga	Ga_error	Ge	Ge_error	As	As_error	Se	Se_error	Br	Br_error	Rb	Rb_error	Sr	Sr_error	Y	Y_error	Zr	Zr_error	Nb	Nb_error	Mo	Mo_error	Ag	Ag_error	Cd	Cd_error	Sn	Sn_error	Sb	Sb_error	Te	Te_error	I	I_error	Cs	Cs_error	Ba	Ba_error	La	La_error	Ce	Ce_error	Pr	Pr_error	Nd	Nd_error	Er	Er_error	Yb	Yb_error	Hf	Hf_error	Ta	Ta_error	W	W_error	Hg	Hg_error	Tl	Tl_error	Pb	Pb_error	Bi	Bi_error	Th	Th_error	U	U_error	Summenkonzentration	";
	var header_Ox = "Element	Beschreibung	Methode	Auswertung	Na2O	Na2O_error	MgO	MgO_error	Al2O3	Al2O3_error	SiO2	SiO2_error	P2O5	P2O5_error	SO3	SO3_error	Cl	Cl_error	K2O	K2O_error	CaO	CaO_error	TiO2	TiO2_error	V2O5	V2O5_error	Cr2O3	Cr2O3_error	MnO	MnO_error	Fe2O3	Fe2O3_error	CoO	CoO_error	NiO	NiO_error	CuO	CuO_error	ZnO	ZnO_error	Ga	Ga_error	Ge	Ge_error	As2O3	As2O3_error	Se	Se_error	Br	Br_error	Rb2O	Rb2O_error	SrO	SrO_error	Y	Y_error	ZrO2	ZrO2_error	Nb2O5	Nb2O5_error	Mo	Mo_error	Ag	Ag_error	Cd	Cd_error	SnO2	SnO2_error	Sb2O5	Sb2O5_error	Te	Te_error	I	I_error	Cs	Cs_error	Ba	Ba_error	La	La_error	Ce	Ce_error	Pr	Pr_error	Nd	Nd_error	Er	Er_error	Yb	Yb_error	Hf	Hf_error	Ta2O5	Ta2O5_error	WO3	WO3_error	Hg	Hg_error	Tl	Tl_error	PbO	PbO_error	Bi	Bi_error	Th	Th_error	U	U_error	Summenkonzentration";
	var einheiten_El = "Einheit				mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	%";	
	var einheiten_Ox ="Einheit				%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%	Abs. Fehler ( %)	%";
	
	
//***************************************************** Mittelwerte werden berechnet *************************************** 
	function elementKommaMittelwertNein (uploadedData){
		processData(uploadedData);	
	
		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1788);
		
			var merge = header_El + "\n" + data;
			var daten= d3.tsvParse(merge);			
		
			// header array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_El + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);	

			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(2);
					}
					if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
/* 					if (calculatedOutput[i][j].includes(",00") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(",00", "");
					} */
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}			
				} 
			}   
			
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			} 
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  
	
			// join headers and data
			var finalOutput = date + "\n" + header_El+ "\n" + einheiten_El + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date + "_RFA_Elemente_Komma.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}	

//------------------------------------------------------------------------	
function oxideKommaMittelwertNein (uploadedData){
		processData(uploadedData);	
	

		function processData(data) {
			
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1480);
			
			console.log(data);
			var merge = header_Ox + "\n" + data;
			var daten = d3.tsvParse(merge);
	
		
			// header array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}

			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
		
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_Ox + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);
	
			var calculatedOutput =[];
	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];

				
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(4);
					}
					if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
				/* 	if (calculatedOutput[i][j].includes(",0000") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(",0000", "");
					}	 */
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			}  

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
			
			// array to string 
 			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}
			
			
			// join headers and data
			var finalOutput = date + "\n" + header_Ox+ "\n" + einheiten_Ox + "\n" + calculatedOutputString; 

	 
			// save as local txt			
 			var file = new File([finalOutput], date + "_RFA_Oxide_Komma.txt", {type: "text/plain;charset=utf-8"}); 
			saveAs(file); 
			
		
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}		
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
  }
}	

//------------------------------------------------------------------------	
function elementPunktMittelwertNein (uploadedData){
	processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1788);
			var merge = header_El + "\n" + data;
			var daten= d3.tsvParse(merge);
		
			// header array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_El + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);

			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}
	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(2);
					}
				/* if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
					if (calculatedOutput[i][j].includes(".00") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".00", "");
					} */	
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			} 
			
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			} 
			
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}


			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  	
	
			// join headers and data
			var finalOutput = date + "\n" + header_El+ "\n" + einheiten_El + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date+ "_RFA_Elemente_Punkt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}		
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}	

//------------------------------------------------------------------------	
function oxidePunktMittelwertNein (uploadedData){
		processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1480);
			var merge = header_Ox + "\n" + data;
			var daten= d3.tsvParse(merge);
		
			// header array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_Ox + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);

			var calculatedOutput =[];
	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(4);
					}
					/* if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
					if (calculatedOutput[i][j].includes(".0000") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".0000", "");
					} */		
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			}   
			
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			} 
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,108);
			}

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  
	
			// join headers and data
			var finalOutput = date + "\n" + header_Ox+ "\n" + einheiten_Ox + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date + "_RFA_Oxide_Punkt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}

//***************************************************** <1/3 Spalten werden gelöscht*************************************** 
	function elementKommaMittelwertJa (uploadedData){
		processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1788);
			var merge = header_El + "\n" + data;
			var daten= d3.tsvParse(merge);			
		
			// header array, einheiten Array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_El.split("	");
			
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_El + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);	

			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(2);
					}
					if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
/* 					if (calculatedOutput[i][j].includes(",00") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(",00", "");
					} */
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}			
				} 
			}  

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}			
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}

			
			//length output and minimum to not be deleted
			var calOutputLength = calculatedOutput.length;
			var minimum = calOutputLength/3;	

			var leereSpaltenAnzahl = [0, 0, 0, 0];
			
			//count empty fields
 			for (var j=4; j<numberOfHeaders; j++){
				var zahl=0;
				for (var i=0; i<calOutputLength; i++){
					if (calculatedOutput[i][j] ==""|| calculatedOutput[i][j]=="0"){
						zahl++;
					}
				}
				
				leereSpaltenAnzahl.push(zahl);
			} 
			
			//array with positions to be deleted
			var position = [];
			for (var i=0; i<leereSpaltenAnzahl.length; i++){
				if (leereSpaltenAnzahl[i]>=minimum){
					position.push(i);
				}
			}
				
			//add header and einheiten at beginning
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);

			//remove columns using defined array
			 for (j=0; j<calculatedOutput.length; j++){  
				for (var i = position.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(position[i], 1); 
				}
			} 

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  
	
			// join headers and data
			var finalOutput = date + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date+"_RFA_Elemente_Komma_bereinigt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}	

//------------------------------------------------------------------------	
function oxideKommaMittelwertJa (uploadedData){
		processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1480);
			var merge = header_Ox + "\n" + data;
			var daten = d3.tsvParse(merge);
		
			// header array, einhieten array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_Ox.split("	");
			
			// eventuell raus weil nur für excel
			var dateArray = date.split("	");
			while (dateArray.length<109){
				dateArray.push("");
			}         		

			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}

			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
		
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_Ox + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);

			var calculatedOutput =[];
	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];

				
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);			
			}
	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(4);
					}
					if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
	/* 				if (calculatedOutput[i][j].includes(",0000") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(",0000", "");
					}	 */
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			} 

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}				
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
			
			//length output and minimum to not be deleted
			var calOutputLength = calculatedOutput.length;
			var minimum = calOutputLength/3;	

			var leereSpaltenAnzahl = [0, 0, 0, 0];
			
			//count empty fields
 			for (var j=4; j<numberOfHeaders; j++){
				var zahl=0;
				for (var i=0; i<calOutputLength; i++){
					if (calculatedOutput[i][j] ==""|| calculatedOutput[i][j]=="0"){
						zahl++;
					}
				}
				
				leereSpaltenAnzahl.push(zahl);
			} 
					

			//array with positions to be deleted
			var position = [];
			for (var i=0; i<leereSpaltenAnzahl.length; i++){
				if (leereSpaltenAnzahl[i]>=minimum){
					position.push(i);
				}
			}

				
			//add header and einheiten at beginning
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);
			
			//remove columns using defined array
			for (j=0; j<calculatedOutput.length; j++){  
				for (var i = position.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(position[i], 1); 
				}
			}
			
			// array to string 
			var calculatedOutputString= "";	
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}
			
			// join headers and data
			var finalOutput = date + "\n" + calculatedOutputString; 
	 
			// save as local txt			
 			var file = new File([finalOutput], date+ "_RFA_Oxide_Komma_bereinigt.txt", {type: "text/plain;charset=utf-8"}); 
			saveAs(file); 
		
}
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}		
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	

}	

//------------------------------------------------------------------------	

function elementPunktMittelwertJa (uploadedData){
	processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1788);
			var merge = header_El + "\n" + data;
			var daten= d3.tsvParse(merge);
		
			// header array, einheitenArray & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_El.split("	");
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_El + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);

			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(2);
					}
					/* if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
					if (calculatedOutput[i][j].includes(".00") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".00", "");
					} */	
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			}   
			
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}	
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
			
			//length output and minimum to not be deleted
			var calOutputLength = calculatedOutput.length;
			var minimum = calOutputLength/3;	

			var leereSpaltenAnzahl = [0, 0, 0, 0];
			
			//count empty fields
 			for (var j=4; j<numberOfHeaders; j++){
				var zahl=0;
				for (var i=0; i<calOutputLength; i++){
					if (calculatedOutput[i][j] ==""|| calculatedOutput[i][j]=="0"){
						zahl++;
					}
				}
				
				leereSpaltenAnzahl.push(zahl);
			} 
			
			//array with positions to be deleted
			var position = [];
			for (var i=0; i<leereSpaltenAnzahl.length; i++){
				if (leereSpaltenAnzahl[i]>=minimum){
					position.push(i);
				}
			}
				
			//add header and einheiten at beginning
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);

			//remove columns using defined array
			 for (j=0; j<calculatedOutput.length; j++){  
				for (var i = position.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(position[i], 1); 
				}
			} 

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  
	
			// join headers and data
			var finalOutput = date + "\n"  + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date + "_RFA_Elemente_Punkt_bereinigt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}		
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}	

//------------------------------------------------------------------------	
function oxidePunktMittelwertJa (uploadedData){
	
		processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1480);
			var merge = header_Ox + "\n" + data;
			var daten= d3.tsvParse(merge);
		
			// header array, einheiten array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_Ox.split("	");
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_Ox + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);

			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);			
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(4);
					}
					/* if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
					if (calculatedOutput[i][j].includes(".0000") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".0000", "");
					} */		
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			} 

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}				
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,108);
			}

			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
			
			//length output and minimum to not be deleted
			var calOutputLength = calculatedOutput.length;
			var minimum = calOutputLength/3;	

			var leereSpaltenAnzahl = [0, 0, 0, 0];
			
			//count empty fields
 			for (var j=4; j<numberOfHeaders; j++){
				var zahl=0;
				for (var i=0; i<calOutputLength; i++){
					if (calculatedOutput[i][j] ==""|| calculatedOutput[i][j]=="0"){
						zahl++;
					}
				}
				
				leereSpaltenAnzahl.push(zahl);
			} 
			
			//array with positions to be deleted
			var position = [];
			for (var i=0; i<leereSpaltenAnzahl.length; i++){
				if (leereSpaltenAnzahl[i]>=minimum){
					position.push(i);
				}
			}
				
			//add header and einheiten at beginning
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);

			//remove columns using defined array
			 for (j=0; j<calculatedOutput.length; j++){  
				for (var i = position.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(position[i], 1); 
				}
			} 

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  
	
			// join headers and data
			var finalOutput = date + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date+ "_RFA_Oxide_Punkt_bereinigt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}


//***************************************************** Errors werden gelöscht***************************************
//--------------------
	function elementKommaMittelwertNeinError (uploadedData){
		processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1788);
			
			var merge = header_El + "\n" + data;
			var daten= d3.tsvParse(merge);			
		
			// header array & Dims & einheiten array
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_El.split("	");
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_El + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);	

			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(2);
					}
					if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
/* 					if (calculatedOutput[i][j].includes(",00") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(",00", "");
					} */
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}			
				} 
			}

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}				
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
						
			//array with error positions 
			var errorPositions = [];
			for (i=0; i<numberOfHeaders; i++){
				if (headerNames[i].includes("error")===true){
					errorPositions.push(i);
				}
			}
			
			//add headers and einheiten
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);			
			
			//remove columns using defined array
			 for (j=0; j<calculatedOutput.length; j++){  
				for (var i = errorPositions.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(errorPositions[i], 1); 
				}
			} 
			
			// array to string 
 			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}
  
	
			// join headers and data
			var finalOutput = date + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date + "_RFA_Elemente_Komma_bereinigt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}	

//------------------------------------------------------------------------	
function oxideKommaMittelwertNeinError (uploadedData){
		processData(uploadedData);	
	

		function processData(data) {
			
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1480);
			var merge = header_Ox + "\n" + data;
			var daten = d3.tsvParse(merge);
		
			// header array & Dims & einheiten array
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_Ox.split("	");
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}

			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
		
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_Ox + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);
	
			var calculatedOutput =[];
	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];

				
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(4);
					}
					if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
				/* 	if (calculatedOutput[i][j].includes(",0000") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(",0000", "");
					}	 */
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			}   

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}	
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
			
			//array with error positions 
			var errorPositions = [];
			for (i=0; i<numberOfHeaders; i++){
				if (headerNames[i].includes("error")===true){
					errorPositions.push(i);
				}
			}
			
			//add headers and einheiten
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);			
			
			//remove columns using defined array
			 for (j=0; j<calculatedOutput.length; j++){  
				for (var i = errorPositions.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(errorPositions[i], 1); 
				}
			} 
			
			// array to string 
 			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}
			
			
			// join headers and data
			var finalOutput = date + "\n"  + calculatedOutputString; 

	 
			// save as local txt			
 			var file = new File([finalOutput], date + "_RFA_Oxide_Komma_bereinigt.txt", {type: "text/plain;charset=utf-8"}); 
			saveAs(file); 
			
		
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}		
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
  }
}	

//------------------------------------------------------------------------	
function elementPunktMittelwertNeinError (uploadedData){
	processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1788);
			var merge = header_El + "\n" + data;
			var daten= d3.tsvParse(merge);
		
			// header array & Dims & einheiten Array
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_El.split("	");
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_El + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);

			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}
	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(2);
					}
				/* if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
					if (calculatedOutput[i][j].includes(".00") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".00", "");
					} */	
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			}  

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}				
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
						
			//array with error positions 
			var errorPositions = [];
			for (i=0; i<numberOfHeaders; i++){
				if (headerNames[i].includes("error")===true){
					errorPositions.push(i);
				}
			}
			
			//add headers and einheiten
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);			
			
			//remove columns using defined array
			 for (j=0; j<calculatedOutput.length; j++){  
				for (var i = errorPositions.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(errorPositions[i], 1); 
				}
			} 

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  	
	
			// join headers and data
			var finalOutput = date + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date+ "_RFA_Elemente_Punkt_bereinigt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}		
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}	

//------------------------------------------------------------------------	
function oxidePunktMittelwertNeinError (uploadedData){
		processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1480);
			var merge = header_Ox + "\n" + data;
			var daten= d3.tsvParse(merge);
		
			// header array & Dims &einheiten Array
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_Ox.split("	");
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_Ox + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);

			var calculatedOutput =[];
	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);		
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(4);
					}
					/* if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
					if (calculatedOutput[i][j].includes(".0000") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".0000", "");
					} */		
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			}   

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}	
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,108);
			}
			
			//array with error positions 
			var errorPositions = [];
			for (i=0; i<numberOfHeaders; i++){
				if (headerNames[i].includes("error")===true){
					errorPositions.push(i);
				}
			}
			
			//add headers and einheiten
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);			
			
			//remove columns using defined array
			 for (j=0; j<calculatedOutput.length; j++){  
				for (var i = errorPositions.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(errorPositions[i], 1); 
				}
			} 

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  
	
			// join headers and data
			var finalOutput = date + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date + "_RFA_Oxide_Punkt_bereinigt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}


//------------ <1/3 Spalten werden gelöscht & errors
	function elementKommaMittelwertJaError (uploadedData){
		processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1788);
			var merge = header_El + "\n" + data;
			var daten= d3.tsvParse(merge);			
		
			// header array, einheiten Array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_El.split("	");
			
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_El + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);	

			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(2);
					}
					if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
/* 					if (calculatedOutput[i][j].includes(",00") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(",00", "");
					} */
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}			
				} 
			}  

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}				
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
			
			//array with error positions 
			var errorPositions = [];
			for (i=0; i<numberOfHeaders; i++){
				if (headerNames[i].includes("error")===true){
					errorPositions.push(i);
				}
			}
			
			//length output and minimum to not be deleted
			var calOutputLength = calculatedOutput.length;
			var minimum = calOutputLength/3;	

			var leereSpaltenAnzahl = [0, 0, 0, 0];
			
			//count empty fields
 			for (var j=4; j<numberOfHeaders; j++){
				var zahl=0;
				for (var i=0; i<calOutputLength; i++){
					if (calculatedOutput[i][j] ==""|| calculatedOutput[i][j]=="0"){
						zahl++;
					}
				}
				
				leereSpaltenAnzahl.push(zahl);
			} 
			
			//set leereSpaltenAnzahl to calOutputLength where index=error
			for (i=0; i<leereSpaltenAnzahl.length; i++) {
				for (j=0; j<errorPositions.length; j++){
					if (i===errorPositions[j]){				
					leereSpaltenAnzahl[i]=calOutputLength;
					}
				}
			} 
			
			//array with positions to be deleted
			var position = [];
			for (var i=0; i<leereSpaltenAnzahl.length; i++){
				if (leereSpaltenAnzahl[i]>=minimum){
					position.push(i);
				}
			}	
				
			//add header and einheiten at beginning
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);
			
			//remove columns using defined array
			for (j=0; j<calculatedOutput.length; j++){  
				for (var i = position.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(position[i], 1); 
				}
			}

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  
	
			// join headers and data
			var finalOutput = date + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date+"_RFA_Elemente_Komma_bereinigt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}	

//------------------------------------------------------------------------	
function oxideKommaMittelwertJaError (uploadedData){
		processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1480);
			var merge = header_Ox + "\n" + data;
			var daten = d3.tsvParse(merge);
		
			// header array, einhieten array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_Ox.split("	");
			
			// eventuell raus weil nur für excel
			var dateArray = date.split("	");
			while (dateArray.length<109){
				dateArray.push("");
			}         		

		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}

			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
		
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_Ox + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);
	

			var calculatedOutput =[];
	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];

				
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);			
			}
	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(4);
					}
					if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
	/* 				if (calculatedOutput[i][j].includes(",0000") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(",0000", "");
					}	 */
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			}  

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}				
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}
			
			//array with error positions 
			var errorPositions = [];
			for (i=0; i<numberOfHeaders; i++){
				if (headerNames[i].includes("error")===true){
					errorPositions.push(i);
				}
			}
			
			//length output and minimum to not be deleted
			var calOutputLength = calculatedOutput.length;
			var minimum = calOutputLength/3;	

			var leereSpaltenAnzahl = [0, 0, 0, 0];
			
			//count empty fields
 			for (var j=4; j<numberOfHeaders; j++){
				var zahl=0;
				for (var i=0; i<calOutputLength; i++){
					if (calculatedOutput[i][j] ==""|| calculatedOutput[i][j]=="0"){
						zahl++;
					}
				}
				
				leereSpaltenAnzahl.push(zahl);
			} 
			
			//set leereSpaltenAnzahl to calOutputLength where index=error
			for (i=0; i<leereSpaltenAnzahl.length; i++) {
				for (j=0; j<errorPositions.length; j++){
					if (i===errorPositions[j]){				
					leereSpaltenAnzahl[i]=calOutputLength;
					}
				}
			} 
			
			//array with positions to be deleted
			var position = [];
			for (var i=0; i<leereSpaltenAnzahl.length; i++){
				if (leereSpaltenAnzahl[i]>=minimum){
					position.push(i);
				}
			}	
				
			//add header and einheiten at beginning
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);
			
			//remove columns using defined array
			for (j=0; j<calculatedOutput.length; j++){  
				for (var i = position.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(position[i], 1); 
				}
			}

			
			// array to string 
			var calculatedOutputString= "";	
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}
			
			// join headers and data
			var finalOutput = date + "\n" + calculatedOutputString; 
	 
			// save as local txt			
 			var file = new File([finalOutput], date+ "_RFA_Oxide_Komma_bereinigt.txt", {type: "text/plain;charset=utf-8"}); 
			saveAs(file); 
	
}
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}		
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	

}	

//------------------------------------------------------------------------	

function elementPunktMittelwertJaError (uploadedData){
	processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1788);
			var merge = header_El + "\n" + data;
			var daten= d3.tsvParse(merge);
		
			// header array, einheitenArray & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_El.split("	");
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_El + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);
	
			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);	
		
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(2);
					}
					/* if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
					if (calculatedOutput[i][j].includes(".00") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".00", "");
					} */	
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			}   

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}	
			
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,109);
			}

			//array with error positions 
			var errorPositions = [];
			for (i=0; i<numberOfHeaders; i++){
				if (headerNames[i].includes("error")===true){
					errorPositions.push(i);
				}
			}
			
			//length output and minimum to not be deleted
			var calOutputLength = calculatedOutput.length;
			var minimum = calOutputLength/3;	

			var leereSpaltenAnzahl = [0, 0, 0, 0];
			
			//count empty fields
 			for (var j=4; j<numberOfHeaders; j++){
				var zahl=0;
				for (var i=0; i<calOutputLength; i++){
					if (calculatedOutput[i][j] ==""|| calculatedOutput[i][j]=="0"){
						zahl++;
					}
				}
				
				leereSpaltenAnzahl.push(zahl);
			} 
			
			//set leereSpaltenAnzahl to calOutputLength where index=error
			for (i=0; i<leereSpaltenAnzahl.length; i++) {
				for (j=0; j<errorPositions.length; j++){
					if (i===errorPositions[j]){				
					leereSpaltenAnzahl[i]=calOutputLength;
					}
				}
			} 
			
			//array with positions to be deleted
			var position = [];
			for (var i=0; i<leereSpaltenAnzahl.length; i++){
				if (leereSpaltenAnzahl[i]>=minimum){
					position.push(i);
				}
			}	
				
			//add header and einheiten at beginning
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);
			
			//remove columns using defined array
			for (j=0; j<calculatedOutput.length; j++){  
				for (var i = position.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(position[i], 1); 
				}
			}

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  
	
			// join headers and data
			var finalOutput = date + "\n"  + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date + "_RFA_Elemente_Punkt_bereinigt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}		
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}	

//------------------------------------------------------------------------	
function oxidePunktMittelwertJaError (uploadedData){
	
		processData(uploadedData);	
	

		function processData(data) {
		
			// extract date & data, merge, convert to tsv
			var date = data.substr(0, 10);
			var data = data.slice(1480);
			var merge = header_Ox + "\n" + data;
			var daten= d3.tsvParse(merge);
		
			// header array, einheiten array & Dims
			var headerNames = d3.keys(daten[0]);
			var numberOfHeaders = headerNames.length;
			var lengthDaten = daten.length;
			var einheitenNames = einheiten_Ox.split("	");
		
			// extract lines and convert to array
			var dataArray = [];
			for (var i=0; i<lengthDaten; i++){
				dataArray[i] = d3.values(daten[i]);
			}
			// change , to . and "" & "(x,y)" & "<x" to "Not available"
			for (var i=0; i<lengthDaten; i++){
				dataArray[i].forEach(changeString)
			}
	
			// extract sample numbers - keep only unique values
			var sampleNumbers = [];
			for (i=0; i <lengthDaten;i++) { 
				sampleNumbers[i] = dataArray[i][0];
			}
			var sampleNumbersUnique = _.uniq(sampleNumbers);
	
			// convert array back to tsv for later filtering
			var dataArrayString = "";
			for (var i = 0; i <lengthDaten; i++) { 
				dataArrayString += dataArray[i].join("	") + "\n";
			}  
			var combinedString = header_Ox + "\n" + dataArrayString;
			var combinedTSV= d3.tsvParse(combinedString);
			
			var calculatedOutput =[];

	
			// looping through whole file & calculation averages
			for (var n=0; n<sampleNumbersUnique.length; n++){	
				var filteredLines=[];
				var filteredValues = [];
				// create array of lines where sample numbers are the same
				filteredLines=_.filter(combinedTSV, { 'Element': sampleNumbersUnique[n] });
		
				// convert to array
				for (var o=0; o<filteredLines.length; o++){
					filteredValues[o] = d3.values(filteredLines[o]);
				}
				
				// converting strings to numbers
				for (var i = 0; i <filteredValues.length; i++) { 
					for (var j = 4; j < numberOfHeaders; j++) { 
						if (filteredValues[i][j] !== "Not available"){
							filteredValues[i][j] = parseFloat(filteredValues[i][j])
						}
					} 
				}  
	
				var Anzahl;
				var Zahl;
				
				// iterate over elements
				for (var z = 4; z < numberOfHeaders; z++) {
					Anzahl = 1;	
					Zahl = 0;
				
					if (typeof(filteredValues[0][z]) === "number"){	
						Zahl = filteredValues[0][z]; 
					}
					
					// compare line 1 with following lines
					for (y=1; y < filteredValues.length; y++) {
						
						// if sample numbers are not the same 
						if (filteredValues[0][0] !== filteredValues[y][0]){
							break;
						// if sample numbers are the same & both element entries are values
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) === "number") {
							Anzahl++;
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) === "number"){
							Zahl += filteredValues[y][z];
						// if sample numbers are the same & one element entry is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) === "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						// if sample numbers are the same & non of the element entries is a value
						} else if (filteredValues[0][0] === filteredValues[y][0] && typeof(filteredValues[0][z]) !== "number" && typeof(filteredValues[y][z]) !== "number"){
							break;
						}
					}
					
					// do math 
					if (Zahl !== 0){	
						filteredValues[0][z] = Zahl/Anzahl; 
					} else if (Zahl === 0) {
						filteredValues[0][z] = "Not available";
					}
				}
		
			// push line with calculated value to new array
			calculatedOutput.push(filteredValues[0]);			
			}

	
			// only keep 4 decimal places unless even number, then 0 & . to ,
			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 4; j < numberOfHeaders; j++) { 
					if (typeof(calculatedOutput[i][j]) === "number"){
						calculatedOutput[i][j] = calculatedOutput[i][j].toFixed(4);
					}
					/* if (calculatedOutput[i][j].includes(".") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".", ",");
					}
					if (calculatedOutput[i][j].includes(".0000") === true){
						calculatedOutput[i][j] = calculatedOutput[i][j].replace(".0000", "");
					} */		
					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}						
				} 
			}  

			for (var i = 0; i <calculatedOutput.length; i++) { 
				for (var j = 0; j < numberOfHeaders; j++) { 
 					if (calculatedOutput[i][j] === "Not available"){
						calculatedOutput[i][j] = "";
					}		 			
				} 
			}				
	
			// delete empty last column
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutput[i] = calculatedOutput[i].slice(0,108);
			}

			//array with error positions 
			var errorPositions = [];
			for (i=0; i<numberOfHeaders; i++){
				if (headerNames[i].includes("error")===true){
					errorPositions.push(i);
				}
			}
			
			//length output and minimum to not be deleted
			var calOutputLength = calculatedOutput.length;
			var minimum = calOutputLength/3;	

			var leereSpaltenAnzahl = [0, 0, 0, 0];
			
			//count empty fields
 			for (var j=4; j<numberOfHeaders; j++){
				var zahl=0;
				for (var i=0; i<calOutputLength; i++){
					if (calculatedOutput[i][j] ==""|| calculatedOutput[i][j]=="0"){
						zahl++;
					}
				}
				
				leereSpaltenAnzahl.push(zahl);
			} 
			
			//set leereSpaltenAnzahl to calOutputLength where index=error
			for (i=0; i<leereSpaltenAnzahl.length; i++) {
				for (j=0; j<errorPositions.length; j++){
					if (i===errorPositions[j]){				
					leereSpaltenAnzahl[i]=calOutputLength;
					}
				}
			} 
			
			//array with positions to be deleted
			var position = [];
			for (var i=0; i<leereSpaltenAnzahl.length; i++){
				if (leereSpaltenAnzahl[i]>=minimum){
					position.push(i);
				}
			}	
				
			//add header and einheiten at beginning
			calculatedOutput.unshift(einheitenNames);
			calculatedOutput.unshift(headerNames);
			
			//remove columns using defined array
			for (j=0; j<calculatedOutput.length; j++){  
				for (var i = position.length -1; i >= 0; i--) {
					calculatedOutput[j].splice(position[i], 1); 
				}
			}

			// array to string 
			var calculatedOutputString= "";
			for (var i = 0; i <calculatedOutput.length; i++) { 
				calculatedOutputString += (calculatedOutput[i].join("	") + "\n");
			}  
	
			// join headers and data
			var finalOutput = date + "\n" + calculatedOutputString; 
	
			// save as local txt
			var file = new File([finalOutput], date+ "_RFA_Oxide_Punkt_bereinigt.txt", {type: "text/plain;charset=utf-8"});
			saveAs(file); 
		} 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(",", '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}
		if (item === "0") {
			arr[index]="Not available";
		}
	}      
   	
}
