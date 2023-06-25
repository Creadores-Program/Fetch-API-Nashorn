function fetch(url, method, content){
    var HttpURLConnectionftch = Java.type('java.net.HttpURLConnection');
    var URLftch = Java.type('java.net.URL');
    var BufferedReaderftch = Java.type('java.io.BufferedReader');
    var InputStreamReaderftch = Java.type('java.io.InputStreamReader');
    var StringBufferftch = Java.type("java.lang.StringBuffer");
    var sendftch = {
        error: "[ERROR] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        log: ""
    }
    if(!url){
        console.error(sendftch.error + "it cant be empty!");
        return;
    }
    if(url.contains(" ")){
        console.error(sendftch.error + "The web page cannot contain spaces!");
        return;
    }
    if(!method){
        try{
            var urlftch = new URLftch(url);
            var conftch = urlftch.openConnection();
            conftch.setRequestMethod("GET");
            conftch.setRequestProperty("User-Agent", "Mozilla/5.0");
            var responsecodeftch = conftch.getResponseCode();
            var inftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream()));
            var inputlineftch;
            var responseftch = new StringBufferftch();
            while((inputlineftch = inftch.readLine()) != null){
                responseftch.append(inputlineftch);
            }
            inftch.close();
            return responseftch.toString();
        }catch(error){
            console.error(sendftch.error + error);
        }
        return;
    }
    if(method == "GET"){
        try{
            var urlftch = new URLftch(url);
            var conftch = urlftch.openConnection();
            conftch.setRequestMethod("GET");
            conftch.setRequestProperty("User-Agent", "Mozilla/5.0");
            var responsecodeftch = conftch.getResponseCode();
            var inftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream()));
            var inputlineftch;
            var responseftch = new StringBufferftch();
            while((inputlineftch = inftch.readLine()) != null){
                responseftch.append(inputlineftch);
            }
            inftch.close();
            return responseftch.toString();
        }catch(error){
            console.error(sendftch.error + error);
        }
        return;
    }
    if(method == "POST"){
        if(!content){
            console.error(sendftch.error + "You need content to use POST!");
            return;
        }
        console.warn(sendftch.warn + "This mode is Experimental and may not work correctly!");
        return "Not supported";
    }
}
