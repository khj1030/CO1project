package com.co1project.daeda.domain.investor.prosentation;

import com.co1project.daeda.domain.investor.domain.Investor;
import com.co1project.daeda.domain.investor.prosentation.dto.request.InvestorRequest;
import com.co1project.daeda.domain.investor.service.InvestorService;
import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.global.annotation.CheckToken;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/investor")
@RequiredArgsConstructor
public class InvestorController {
    private final InvestorService investorService;

    @CheckToken
    @PostMapping("/create")
    public Investor create(@RequestBody InvestorRequest request, @RequestAttribute User user) {
        return investorService.create(request, user);
    }

    @GetMapping
    public List<Investor> findByAll() {
        return investorService.findByAll();
    }

    @GetMapping("/{investorId}")
    public Investor findById(@PathVariable Long investorId) {
        return investorService.findByID(investorId);
    }
}
