package com.upordown.backend.controller;

import com.upordown.backend.utility.StatsProvider;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

@Controller
@RequestMapping("/api/metrics/url/ping")
public class StatsController {
    @GetMapping("/ping")
    public @ResponseBody long getPing(@RequestParam("url") String url) throws IOException {
        StatsProvider tester = new StatsProvider();
        return tester.getPing(url);
    }

    @GetMapping("/status")
    public @ResponseBody Boolean getStatus(@RequestParam("url") String url) throws IOException {
        StatsProvider tester = new StatsProvider();
        return tester.getStatus(url);
    }





}
