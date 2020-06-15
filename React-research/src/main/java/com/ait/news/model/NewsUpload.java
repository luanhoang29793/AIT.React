package  com.ait.news.model;

import org.springframework.web.multipart.MultipartFile;

public class NewsUpload extends News{
    private MultipartFile file;

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
}