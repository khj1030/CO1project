package com.co1project.daeda.global.exception;

import com.co1project.daeda.global.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<Response> customException(CustomException e) {
        return new ResponseEntity<>(
                new Response(e.getHttpStatus(), e.getMessage()),
                e.getHttpStatus()
        );
    }
}
