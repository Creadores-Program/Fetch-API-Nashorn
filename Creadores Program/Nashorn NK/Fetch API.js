//Addon for Nashorn made by Creadores Program©2023
//MIT license© https://raw.githubusercontent.com/Trollhunters501/Fetch-API-Nashorn/main/LICENSE
function fetch(url, method, body){
    let HttpURLConnectionftch = Java.type('java.net.HttpURLConnection');
    let URLftch = Java.type('java.net.URL');
    let BufferedReaderftch = Java.type('java.io.BufferedReader');
    let InputStreamReaderftch = Java.type('java.io.InputStreamReader');
    let StringBufferftch = Java.type("java.lang.StringBuffer");
    let StringBuilderftch = Java.type("java.lang.StringBuilder");
    let UserAgentftch = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36";
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
            let urlftch = new URLftch(url);
            let conftch = urlftch.openConnection();
            conftch.setRequestMethod("GET");
            conftch.setRequestProperty("User-Agent", UserAgentftch);
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
            console.error(error);
        }
        return;
    }
    if(method == "GET"){
        try{
            let urlftch = new URLftch(url);
            let conftch = urlftch.openConnection();
            conftch.setRequestMethod("GET");
            conftch.setRequestProperty("User-Agent", UserAgentftch);
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
            console.error(error);
        }
        return;
    }
    if(method == "HEAD"){
        try{
            let urlftch = new URLftch(url);
            let conftch = urlftch.openConnection();
            conftch.setRequestMethod("HEAD");
            conftch.setRequestProperty("User-Agent", UserAgentftch);
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
            console.error(error);
        }
        return;
    }
    if(method == "POST"){
        if(!body){
            console.error("You need content to use POST!");
            return;
        }
        let urlftch = new URLftch(url);
        let conftch = urlftch.openConnection();
        conftch.setRequestMethod("POST");
        conftch.setRequestProperty("User-Agent", UserAgentftch);
        conftch.setRequestProperty("Content-Type", "application/json; utf-8");
        let jsonContentftch = body;
        conftch.setDoOutput(true);
        let osftch = conftch.getOutputStream();
        try{
            let inputftch = jsonContentftch.getBytes("utf-8");
            osftch.write(inputftch, 0, inputftch.length);
        }finally{
            osftch.close();
        }
        let brftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream(), "utf-8"));
        try{
            let responseftch = new StringBuilderftch();
            let responseLineftch = null;
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
        let urlftch = new URLftch(url);
        let conftch = urlftch.openConnection();
        conftch.setRequestMethod("PUT");
        conftch.setRequestProperty("User-Agent", UserAgentftch);
        conftch.setRequestProperty("Content-Type", "application/json; utf-8");
        let jsonContentftch = body;
        conftch.setDoOutput(true);
        let osftch = conftch.getOutputStream();
        try{
            let inputftch = jsonContentftch.getBytes("utf-8");
            osftch.write(inputftch, 0, inputftch.length);
        }finally{
            osftch.close();
        }
        let brftch = new BufferedReaderftch(new InputStreamReaderftch(conftch.getInputStream(), "utf-8"));
        try{
            let responseftch = new StringBuilderftch();
            let responseLineftch = null;
            while((responseLineftch = brftch.readLine()) != null){
                responseftch.append(responseLineftch.trim());
            }
        }finally{
            brftch.close();
        }
        return responseftch.toString();
    }
    if(method == "DELETE"){
        console.warn("Not supported!");
    }
}
