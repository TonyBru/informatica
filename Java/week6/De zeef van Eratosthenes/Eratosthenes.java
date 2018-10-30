import java.util.ArrayList;
/**
 * class Prime - geef hier een beschrijving van deze class
 *
 * @author (jouw naam)
 * @version (versie nummer of datum)
 */
public class Eratosthenes
{
    // instance variables - vervang deze door jouw variabelen
    private ArrayList<Integer> prime;
    /**
     * Constructor voor objects van class Prime
     */
    public Eratosthenes()
    {
        prime = new ArrayList<>();
    }

    public void zeef(int lim){
        prime.clear();
        prime.add(2);
        int counter = 2;
        while(counter < lim){
            counter++;
            deler:
            while(true){
                for(int elem : prime) {    
                    if(counter%elem == 0){
                        break deler;
                    }
                }
                prime.add(counter);
                break deler;
            }
        }
        int index = 0;
        for(Integer elem:prime){
            index++;
            System.out.print((index%10==0||index==prime.size())?elem:elem + " ");
            if(index%10==0||index==prime.size()){
                System.out.println();
            }
        }
    }
}
