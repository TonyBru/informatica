
/**
 * class Main - geef hier een beschrijving van deze class
 *
 * @author (jouw naam)
 * @version (versie nummer of datum)
 */
public class Main
{
    // instance variables - vervang deze door jouw variabelen

    /**
     * Constructor voor objects van class Main
     */
    public Main()
    {
        // geef de instance variables een beginwaarde
    }

    public void printkwadraten (int n){
        for(int i=1; i*i<=n; i++){
            System.out.print((i+1)*(i+1)<=n?i*i + ", ":i*i);
        }
        System.out.println();       
    }

    public void printkwadraten2 (int n){
        for(int i=1; i<=n; i++){
            System.out.print(i<n?i*i + ", ":i*i);
        }
        System.out.println();
    }

    public void patroon(int n){
        for(int i=1; i<n+1; i++){
            System.out.print(" ");
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
        }
        System.out.println();
    }

    public void kerstboom(int n){
        System.out.print('\u000C');
        for(int i=1; i<=n; i++){
            for(int j=1; j<=(n*2-1); j++){
                if(j<n-i+1 || j>n+i-1){
                    System.out.print(" ");
                }else{
                    System.out.print("*");
                }
            }
            System.out.println(); 
        }
        for(int i=1; i<n; i++){
            for(int j=1; j<=n; j++){
                if(j == n){
                    System.out.println("*");
                }else{
                    System.out.print(" ");
                }
            }
        }
    }
}
