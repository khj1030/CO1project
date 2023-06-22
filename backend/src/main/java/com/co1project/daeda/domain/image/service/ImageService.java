package com.co1project.daeda.domain.image.service;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class ImageService {

    @Value("${azure.storage.blob.container-name}")
    private String containerName;

    private final BlobContainerClient blobContainerClient;

    public void uploadImage(MultipartFile file) throws IOException {
        blobContainerClient.getBlobClient(file.getOriginalFilename())
                .upload(file.getInputStream(), file.getSize());

    }
}
