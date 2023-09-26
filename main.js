canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasaMarsImagesArray = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
roverWidth = 100;
roverHeight = 90;

backgroundImage = nasaMarsImagesArray[randomNumber];
console.log("backgroundImage = " + backgroundImage);
roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // definindo uma função, ao carregar esta variável
	backgroundImgTag.src = backgroundImage;   // carregando a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadRover; // definindo uma função, ao carregar esta variável
	roverImgTag.src = roverImage;   // carregando a imagem

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();   //Esta função será executada quando a tecla de seta para cima for pressionada.o moverá o rover 10px para cima no Canvas

			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}


// Quando o rover se move para cima, ele se move no eixo "y". Isso significa que as
// coordenadas "y" diminuirão.
function up()
{
	if(roverY >=0)
	{
// 		Portanto, quando o rover sobe, significa que as coordenadas "y" estão diminuindo
// e, portanto, diminuímos o valor de roverY em 10px.
		roverY = roverY - 10;
		console.log("Quando a seta para cima é pressionada,  x = " + roverX + " | y = " +roverY);
// 		Agora temos que atualizar a posição do rover de acordo com as novas
// coordenadas do roverY.
// Se chamarmos apenas uploadRover(), apenas o rover será exibido no
// Canvas e todo o resto ficará invisível.
		 uploadBackground();
		 uploadRover();
	}
}

// Quando o rover se move para baixo, ele está descendo no eixo "y", o que significa
// que as coordenadas "y" aumentarão. 
// as coordenadas "y" aumentam de cima para baixo,
function down()
{
	if(roverY <=500)
	{
		roverY =roverY+ 10;
		console.log("Quando a seta para baixo é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadRover();
	}
}

// Quando o rover se move para a esquerda, ele está indo para a esquerda no eixo
// "x", o que significa que as coordenadas "x" diminuirão.
// as coordenadas "x" diminuir da direita para a
// esquerda
function left()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		console.log("Quando a seta para esquerda é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadRover();
	}
}
// Quando o rover se move para a direita, ele está indo para a direita no eixo "x", o
// que significa que as coordenadas "x" aumentarão.
// as coordenadas "x" aumentar da esquerda para a
// direita,
function right()
{
	if(roverX <= 700)
	{
		roverX =roverX + 10;
		console.log("Quando a seta para direita é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadRover();
   }
}
}
