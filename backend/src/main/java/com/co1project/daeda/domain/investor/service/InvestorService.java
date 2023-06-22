package com.co1project.daeda.domain.investor.service;

import com.co1project.daeda.domain.investor.domain.Investor;
import com.co1project.daeda.domain.investor.domain.repository.InvestorRepository;
import com.co1project.daeda.domain.investor.exception.InvestorNotFoundException;
import com.co1project.daeda.domain.investor.prosentation.dto.request.InvestorRequest;
import com.co1project.daeda.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InvestorService {
    private final InvestorRepository investorRepository;

    public Investor create(InvestorRequest request, User user) {
        Investor investor = request.toEntity();
        investor.injectUser(user);
        return investorRepository.save(investor);
    }

    public List<Investor> findByAll() {
        return investorRepository.findAll();
    }

    public Investor findByID(Long investorId) {
        return investorRepository.findByInvestorId(investorId)
                .orElseThrow(() -> InvestorNotFoundException.EXCEPTION);
    }
}
