package com.upordown.backend.utility;

import java.io.IOException;
import java.net.*;
import java.nio.channels.SocketChannel;
import java.util.Arrays;
import java.util.Date;

public class StatsProvider {

    public Boolean getStatus(String url) throws IOException {

        Boolean result = false;
        try {
            URL urlObj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) urlObj.openConnection();
            con.setRequestMethod("GET");
            // Set connection timeout
            con.setConnectTimeout(3000);
            con.connect();

            int code = con.getResponseCode();
            if (code == 200) {
                result = true;
            }
        } catch (Exception e) {
            result = false;
        }
        return result;
    }

    public long getPing(String url) {
        long timeToRespond = 0;
        try {
            int port = 80;

            URI uri = new URI(url);
            InetAddress inetAddress = InetAddress.getByName(uri.getHost());
            InetSocketAddress socketAddress = new InetSocketAddress(inetAddress, port);

            SocketChannel sc = SocketChannel.open();
            sc.configureBlocking(true);

            Date start = new Date();
            if (sc.connect(socketAddress)) {
                Date stop = new Date();
                timeToRespond = (stop.getTime() - start.getTime());
            }

        } catch (IOException | URISyntaxException ex) {
            System.out.println(ex.getMessage());
        }

        return timeToRespond;
    }
}
