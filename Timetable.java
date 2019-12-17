package timeTable;
import java.util.Random;

public class Timetable {
	public static void main(String[] args) {
		String[][] template = new String[25][8];
		//Start setting up the outside 
		template[0][0] = "placebo";
		template[0][1] = "Monday";
		template[0][2] = "Tuesday";
		template[0][3] = "Wednesday";
		template[0][4] = "Thursday";
		template[0][5] = "Friday";
		template[0][6] = "Saturday";
		template[0][7] = "Sunday";
		for(int i = 1; i< 25; i++) {
			template[i][0] = Integer.toString(i);
			for(int o = 1; o < 8; o ++) {
				template[i][o] = null;
			}
		}
		//end of set up outside
		
		//
		for(int o = 1; o < 8; o++){
	        template[7][o] = "hygene";
	        template[8][o] = "Breakfast";
	        template[12][o] = "Lunch";
	        template[18][o] = "Dinner";
	        template[20][o] = "hygene";
	        for(int i = 1; i < 7; i++){
	            template[i][o] = "sleep";
	        }
	    }
		
		for(int i = 0; i< 25; i++) {
			for(int o = 0; o < 7; o ++) {
				System.out.print(template[i][o]+ " ");
			}
			System.out.println(template[i][6] + " \n");
		}
		int Freetime = Timecalculation(template);
		
		String[][] BalanceTable = GeneralTable(Freetime, template);//take free time and divive into self-study and rest time 
	}
	
	
	
	public static int Timecalculation(String[][] templateTable) {//this one calculate the remaining time in a timeTable
		int remain = 0;
		for(int i = 1; i < templateTable.length; i++ ) 
			for(int o = 1; o < templateTable[i].length; o++) 
				if(templateTable[i][o] == null) {
					remain++;
				}
		return remain;
	}
	public static String[][] GeneralTable(int a, String[][] templateTable){//50% rest time , 50% self-study 
		//divide 
		Random rd = new Random();
		int rest = (int) Math.round(0.5*a);
		int study = (int) Math.round(a - rest);
		while(rest > 0 || study > 0) {
			for(int i = 1; i < templateTable.length; i++ ) 
				for(int o = 1; o < templateTable[i].length; o++) 
					if(templateTable[i][o] == null) {
					}
		return templateTable;
	}
}
