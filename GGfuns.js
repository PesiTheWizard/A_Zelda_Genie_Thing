function translate(C)//char-string; returns int
{
	switch(C)
	{
		case "A":return 0;  //0000
		case "P":return 1;  //0001
		case "Z":return 2;  //0010
		case "L":return 3;  //0011
		case "G":return 4;  //0100
		case "I":return 5;  //0101
		case "T":return 6;  //0110
		case "Y":return 7;  //0111
		case "E":return 8;  //1000 - High bit
		case "O":return 9;  //1001
		case "X":return 10; //1010
		case "U":return 11; //1011
		case "K":return 12; //1100
		case "S":return 13; //1101
		case "V":return 14; //1110
		case "N":return 15; //1111
		default:return -1;
	}
}
//Aaaa Bbbb Cccc Dddd Eeee Ffff
//Cddd Efff Bccc Deee Abbb Faaa

//Aaaa Bbbb Cccc Dddd Eeee Ffff Gggg Hhhh
//Cddd Efff Bccc Deee Ghhh Fggg Abbb Haaa

function encoder(mat, ovt, nvt)//int, int, int; returns string
{
	const cab = ["A","P","Z","L","G","I","T","Y","E","O","X","U","K","S","V","N"];
	let dough = new Array(8);
	dough[0] = ((nvt>>4)&8)|(nvt&7);
	dough[1] = ((mat>>4)&8)|((nvt>>4)&7);
	dough[2] = ((mat>>12)&8)|((mat>>4)&7);
	dough[3] = (mat&8)|((mat>>12)&7);
	dough[4] = ((mat>>8)&8)|(mat&7);
	dough[5] = (ovt&8)|((mat>>8)&7);
	dough[6] = ((ovt>>4)&8)|(ovt&7);
	dough[7] = (nvt&8)|((ovt>>4)&7);
	let genCode = "";
	for(let i=0;i<8;i++)
	{
		genCode += cab[dough[i]];
	}
	return genCode;
}
