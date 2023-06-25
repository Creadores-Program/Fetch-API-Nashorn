function fetch(url, method, content){
    let HttpURLConnectionftch = Java.type('java.net.HttpURLConnection');
    let URLftch = Java.type('java.net.URL');
    let BufferedReaderftch = Java.type('java.io.BufferedReader');
    let InputStreamReaderftch = Java.type('java.io.InputStreamReader');
    let StringBufferftch = Java.type("java.lang.StringBuffer");
    let sendftch = {
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
            let urlftch = new URLftch(url);
            let conftch = urlftch.openConnection();
            conftch.setRequestMethod("GET");
            conftch.setRequestProperty("User-Agent", "Mozilla/5.0");
            let responsecodeftch = conftch.getResponseCode();
            let inftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream()));
            let inputlineftch;
            let responseftch = new StringBufferftch();
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
            let urlftch = new URLftch(url);
            let conftch = urlftch.openConnection();
            conftch.setRequestMethod("GET");
            conftch.setRequestProperty("User-Agent", "Mozilla/5.0");
            let responsecodeftch = conftch.getResponseCode();
            let inftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream()));
            let inputlineftch;
            let responseftch = new StringBufferftch();
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
    }
}