import request from "./request";

export default {
  addIndexFace(image, fullName) {
    return request("/faces/index", "post", {
      image: image,
      fullName: fullName,
    });
  },

  processImage(image) {
    return request("/process", "post", { image });
  },

  startExam(username) {
    return request("/start-exam", "post", { username: username });
  },

  endExam(username) {
    return request("/end-exam", "post", { username: username });
  },
};
