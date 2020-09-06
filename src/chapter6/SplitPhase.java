import java.io.File;
import java.nio.file.Paths;

class SplitPhase{
    public static void main(String[] args) {
        try {
            if(args.length == 0) throw new RuntimeException("파일명을 입력하시오.");
            String filename = args[args.length -1];
            File input = Paths.get(filename).toFile();
            ObjectMapper mapper = new ObjectMapper();
            Order[] orders = mapper.readValue(input, Order[].class);
        } catch (Exception e) {
        }
    }
}