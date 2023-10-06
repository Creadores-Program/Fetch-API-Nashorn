//Addon for Nashorn made by Creadores Program©2023
//MIT license© https://raw.githubusercontent.com/Trollhunters501/Fetch-API-Nashorn/main/LICENSE
function fetch(url, method, body){
    var HttpURLConnectionftch = Java.type('java.net.HttpURLConnection');
    var URLftch = Java.type('java.net.URL');
    var BufferedReaderftch = Java.type('java.io.BufferedReader');
    var InputStreamReaderftch = Java.type('java.io.InputStreamReader');
    var StringBufferftch = Java.type("java.lang.StringBuffer");
    var StringBuilderftch = Java.type("java.lang.StringBuilder");
    if(!url){
        console.error("it cant be empty!");
        return;
    }
    if(url.contains(" ")){
        console.error("The web page cannot contain spaces!");
        return;
    }
    if(!method){
        try{
            var urlftch = new URLftch(url);
            var conftch = urlftch.openConnection();
            conftch.setRequestMethod("GET");
            conftch.setRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36");
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
            conftch.setRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36");
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
    if(method == "HEAD"){
        try{
            var urlftch = new URLftch(url);
            var conftch = urlftch.openConnection();
            conftch.setRequestMethod("HEAD");
            conftch.setRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36");
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
        if(!body){
            console.error(sendftch.error + "You need content to use POST!");
            return;
        }
        var urlftch = new URLftch(url);
        var conftch = urlftch.openConnection();
        conftch.setRequestMethod("POST");
        conftch.setRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36");
        conftch.setRequestProperty("Content-Type", "application/json; utf-8");
        var jsonContentftch = body;
        conftch.setDoOutput(true);
        var osftch = conftch.getOutputStream();
        try{
            var inputftch = jsonContentftch.getBytes("utf-8");
            osftch.write(inputftch, 0, inputftch.length);
        }finally{
            osftch.close();
        }
        var brftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream(), "utf-8"));
        try{
            var responseftch = new StringBuilderftch();
            var responseLineftch = null;
            while((responseLineftch = brftch.readLine()) != null){
                responseftch.append(responseLineftch.trim());
            }
        }finally{
            brftch.close();
        }
        return responseftch.toString();
    }
    if(method == "PUT"){
        if(!body){
            console.error(sendftch.error + "You need content to use PUT!");
            return;
        }
        var urlftch = new URLftch(url);
        var conftch = urlftch.openConnection();
        conftch.setRequestMethod("PUT");
        conftch.setRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36");
        conftch.setRequestProperty("Content-Type", "application/json; utf-8");
        var jsonContentftch = body;
        conftch.setDoOutput(true);
        var osftch = conftch.getOutputStream();
        try{
            var inputftch = jsonContentftch.getBytes("utf-8");
            osftch.write(inputftch, 0, inputftch.length);
        }finally{
            osftch.close();
        }
        var brftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream(), "utf-8"));
        try{
            var responseftch = new StringBuilderftch();
            var responseLineftch = null;
            while((responseLineftch = brftch.readLine()) != null){
                responseftch.append(responseLineftch.trim());
            }
        }finally{
            brftch.close();
        }
        return responseftch.toString();
    }
    if(method == "DELETE"){
        console.warn(sendftch.warn + "Not supported!");
    }
}
