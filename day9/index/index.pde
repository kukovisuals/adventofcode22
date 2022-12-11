String filePath = "info.txt";
String[] lines;
String[] newLines;

void setup() {
  size(1500, 900);
  lines = loadStrings(filePath);
  printArray(lines);
  
  background(0);
  // Print the contents of the file to the console
  strokeWeight(1); 
  stroke(138,135,134,54);
  for(int i = 0; i < height; i += 20){
    line(0, i, width, i);
  }
  for(int j = 20; j < width; j += 20){
    line(j, 0, j, height);
  }

  stroke(255);
  frameRate(2);
  strokeWeight(5); 
}

char type;
int move,x,y;
int index; 

void draw() {
  translate(width/2, height/2);
  // for (int i = 0; i < lines.length; i++) {
    String[] pieces = split(lines[index], ' ');
    type = pieces[0].charAt(0);
    move = int(pieces[1]);

    
    // Convert the pieces of data to numbers
    switch(type){
      case 'U':
        y = move ;
       stroke(84,274,245, 90);
        break;
      case 'D':
        y = (move * -1) ;
      stroke(84,274,245, 90);
        break;
      case 'R':
        x = move ;
      stroke(255, 50);
        break;
      case 'L':
        x = (move * -1);
      stroke(255, 50);
    }
    if(index == 0){
      stroke(200,0,0);
    }

    // Draw a dot at the specified coordinates
    point(x * 20, y * 20);
    index++;
  // }

}

