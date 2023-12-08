//Addon for Nashorn made by Creadores Program©2023
//MIT license© https://raw.githubusercontent.com/Trollhunters501/Fetch-API-Nashorn/main/LICENSE
function fetch(url, method, body, contentType){
    method = method || "GET";
    contentType = contentType || "application/json; utf-8";
    let HttpURLConnectionftch = Java.type('java.net.HttpURLConnection');
    let URLftch = Java.type('java.net.URL');
    let BufferedReaderftch = Java.type('java.io.BufferedReader');
    let InputStreamReaderftch = Java.type('java.io.InputStreamReader');
    let StringBufferftch = Java.type("java.lang.StringBuffer");
    let StringBuilderftch = Java.type("java.lang.StringBuilder");
    let UserAgentftch = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36";
    if(!url){
        console.error("it cant be empty!");
        return;
    }
    if(url.contains(" ")){
        console.error("The web page cannot contain spaces!");
        return;
    }
    let urlftch;
    let conftch;
    let responsecodeftch;
    let responseLineftch;
    let inftch;
    let inputlineftch;
    let responseftch;
    let jsonContentftch;
    let osftch;
    let inputftch;
    let brftch;
    if(method == "GET"){
        try{
            urlftch = new URLftch(url);
            conftch = urlftch.openConnection();
            conftch.setRequestMethod("GET");
            conftch.setRequestProperty("User-Agent", UserAgentftch);
            responsecodeftch = conftch.getResponseCode();
            inftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream()));
            responseftch = new StringBufferftch();
            while((inputlineftch = inftch.readLine()) != null){
                responseftch.append(inputlineftch);
            }
            inftch.close();
            return responseftch.toString();
        }catch(error){
            console.error(error);
        }
        return;
    }
    if(method == "HEAD"){
        try{
            urlftch = new URLftch(url);
            conftch = urlftch.openConnection();
            conftch.setRequestMethod("HEAD");
            conftch.setRequestProperty("User-Agent", UserAgentftch);
            responsecodeftch = conftch.getResponseCode();
            inftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream()));
            responseftch = new StringBufferftch();
            while((inputlineftch = inftch.readLine()) != null){
                responseftch.append(inputlineftch);
            }
            inftch.close();
            return responseftch.toString();
        }catch(error){
            console.error(error);
        }
        return;
    }
    if(method == "POST"){
        if(!body){
            console.error("You need content to use POST!");
            return;
        }
        urlftch = new URLftch(url);
        conftch = urlftch.openConnection();
        conftch.setRequestMethod("POST");
        conftch.setRequestProperty("User-Agent", UserAgentftch);
        conftch.setRequestProperty("Content-Type", contentType);
        jsonContentftch = body;
        conftch.setDoOutput(true);
        osftch = conftch.getOutputStream();
        try{
            inputftch = jsonContentftch.getBytes("utf-8");
            osftch.write(inputftch, 0, inputftch.length);
        }finally{
            osftch.close();
        }
        brftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream(), "utf-8"));
        try{
            responseftch = new StringBuilderftch();
            responseLineftch = null;
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
            console.error("You need content to use PUT!");
            return;
        }
        urlftch = new URLftch(url);
        conftch = urlftch.openConnection();
        conftch.setRequestMethod("PUT");
        conftch.setRequestProperty("User-Agent", UserAgentftch);
        conftch.setRequestProperty("Content-Type", contentType);
        jsonContentftch = body;
        conftch.setDoOutput(true);
        osftch = conftch.getOutputStream();
        try{
            inputftch = jsonContentftch.getBytes("utf-8");
            osftch.write(inputftch, 0, inputftch.length);
        }finally{
            osftch.close();
        }
        brftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream(), "utf-8"));
        try{
            responseftch = new StringBuilderftch();
            responseLineftch = null;
            while((responseLineftch = brftch.readLine()) != null){
                responseftch.append(responseLineftch.trim());
            }
        }finally{
            brftch.close();
        }
        return responseftch.toString();
    }
    if(method == "DELETE"){
        urlftch = new URLftch(url);
        conftch = urlftch.openConnection();
        conftch.setDoOutput(true);
        conftch.setRequestProperty("User-Agent", UserAgentftch);
        conftch.setRequestProperty("Content-Type", contentType);
        conftch.setRequestMethod("DELETE");
        conftch.connect();
        return conftch.getResponseCode();
    }
}
